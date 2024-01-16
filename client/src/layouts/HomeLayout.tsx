import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../components/Topbar";

const HomeLayout = () => {
  return (
    <Container maxW="container.xl" mt="4">
      {/* Header */}
      <Box as="header" mb="8">
        <TopBar />
      </Box>

      {/* Main Content Area */}
      <Box as="main" flex="1">
        <Outlet />
      </Box>

      {/* Footer */}
      <Box as="footer" mt="8"></Box>
    </Container>
  );
};
export default HomeLayout;
