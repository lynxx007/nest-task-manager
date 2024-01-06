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
} from "@chakra-ui/react";

import { FaGoogle } from "react-icons/fa";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signUpSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters" }),
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
type SignUpInput = z.infer<typeof signUpSchema>;
const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpInput> = (data) => {
    console.log(data);
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
          <Heading mb="2">Sign Up</Heading>
          <Text fontFamily={"serif"}>Sign Up to your account</Text>
        </Box>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.username)}>
            <Input
              id="username"
              placeholder="Username"
              mt={4}
              type="text"
              {...register("username")}
            />
            {errors.username && (
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            )}
          </FormControl>
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
            Sign Up
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

export default SignUpForm;
