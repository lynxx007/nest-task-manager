import {
  FormControl,
  Input,
  Button,
  Text,
  FormErrorMessage,
  Box,
  Heading,
  Icon,
  Divider,
  AbsoluteCenter,
  useToast,
} from "@chakra-ui/react";

import { FaGoogle } from "react-icons/fa";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLoginMutation } from "../../api/auth/authApiSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useAppDispatch } from "../../hooks/Redux/customHooks";
import { setUser } from "../../api/auth/authSlice";
import { useNavigate } from "react-router-dom";
interface ServerError {
  statusCode: number;
  message: string;
}
const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(4, { message: "Username must be at least 4 characters" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .regex(/^(.*[0-9].*){2,}$/, {
      message: "Password must contain at least 2 numbers",
    }),
});
export type SignInInput = z.infer<typeof signInSchema>;
const SignInForm = () => {
  const [login] = useLoginMutation();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInInput> = async (data) => {
    try {
      const response = await login(data).unwrap();
      dispatch(setUser(response));
      navigate("/dashboard");
      toast({
        description: response.message,
        status: "success",
        duration: 3000,
      });
    } catch (error) {
      const err = error as FetchBaseQueryError;
      if ("data" in err) {
        const serverError = err.data as ServerError;
        if (serverError.message) {
          toast({
            description: serverError.message,
            status: "error",
            duration: 3000,
          });
        }
      } else {
        toast({
          description: "Something went wrong",
          status: "error",
          duration: 3000,
        });
      }
    }
  };
  return (
    <>
      <Box
        maxW="400px"
        mx="auto"
        border={"2px"}
        borderColor={"gray.200"}
        p={8}
        borderRadius={"lg"}
      >
        <Box p={2}>
          <Heading mb="2">Sign In</Heading>
          <Text fontFamily={"serif"}>Sign in to your account</Text>
        </Box>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <Input
              id="email"
              placeholder="Email"
              mt={4}
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <Input
              id="password"
              placeholder="Password"
              mt={4}
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
          </FormControl>
          <Text mt={4} fontSize={"sm"} color={"blue.500"}>
            Forgot Password?
          </Text>
          <Button
            mt={4}
            type="submit"
            colorScheme="teal"
            width={"full"}
            isLoading={isSubmitting}
          >
            Sign In
          </Button>
        </Box>
        <Box position="relative" mt={5}>
          <Divider />
          <AbsoluteCenter fontSize={"sm"}>OR</AbsoluteCenter>
        </Box>
        <Button
          mt={4}
          colorScheme="teal"
          width={"full"}
          leftIcon={<Icon as={FaGoogle} />}
        >
          Sign In with Google
        </Button>
      </Box>
    </>
  );
};

export default SignInForm;
