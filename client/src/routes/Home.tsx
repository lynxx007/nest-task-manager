import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/Redux/customHooks";

const Home = () => {
  const user = useAppSelector((state) => state.users);

  if (user.user) {
    return <Navigate to="/dashboard" />;
  }

  if (!user.user)
    return (
      <>
        <Box p={8}>
          <Flex direction="column" align="center" maxW="800px" mx="auto">
            <Heading mb={6}>Task Manager</Heading>
            <Text fontSize="xl" mb={8} textAlign="center">
              Your one-stop solution for managing tasks efficiently.
            </Text>
            <Image
              src="/task-square-svgrepo-com.svg"
              height={200}
              mb={8}
              borderRadius="md"
            />
            <Button colorScheme="teal" size="lg" as={Link} to="/register">
              <EditIcon mr={2} />
              Get Started
            </Button>
          </Flex>
        </Box>
      </>
    );
};

export default Home;
