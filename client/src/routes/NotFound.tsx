import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box p={8}>
      <Flex direction="column" align="center" maxW="800px" mx="auto">
        <Heading mb={6}>404 Not Found</Heading>
        <Text fontSize="xl" mb={8} textAlign="center">
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Button colorScheme="teal" size="lg" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </Flex>
    </Box>
  );
};

export default NotFound;
