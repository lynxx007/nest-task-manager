import { Box, Text, Link } from "@chakra-ui/react";
import SignInForm from "../components/form/SignInForm";
import { Link as Router } from "react-router-dom";

export const SignInPage = () => {
  return (
    <Box maxW={"400px"} mx={"auto"}>
      <SignInForm />
      <Text mt={4} fontSize={"sm"} textAlign={"center"} fontFamily={"serif"}>
        New to Task Manager?{" "}
        <Link mx={2} as={Router} color={"blue.500"} to="/register">
          Register
        </Link>
      </Text>
    </Box>
  );
};
