import { Box, Link, Text } from "@chakra-ui/react";
import { Link as Router } from "react-router-dom";
import SignUpForm from "../components/form/SignUpForm";

const Register = () => {
  return (
    <Box maxW={"400px"} mx={"auto"}>
      <SignUpForm />
      <Text mt={4} fontSize={"sm"} textAlign={"center"} fontFamily={"serif"}>
        Already have an account?{" "}
        <Link as={Router} mx={2} color={"blue.500"} to="/login">
          Login
        </Link>
      </Text>
    </Box>
  );
};

export default Register;
