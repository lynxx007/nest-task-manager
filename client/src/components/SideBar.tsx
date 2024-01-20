import {
  Box,
  VStack,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
  Divider,
  Icon,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import { SIDEBAR_ITEMS_USER } from "../constant/sideBarItems";
import { Link as Router, useLocation } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useAppDispatch } from "../hooks/Redux/customHooks";
import { removeUser } from "../api/auth/authSlice";
export const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleLogout = () => {
    dispatch(removeUser());
    toast({
      description: "Logged out successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      {/* Sidebar that turns into a drawer on small screens */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Services</Link>
              <Link href="#">Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Sidebar for larger screens */}
      <Box
        color="white"
        w={{ base: "full", md: "10%" }}
        minH="100vh"
        p="4"
        position={{ base: "static", md: "relative" }}
        top="0"
        left="0"
        boxShadow={{ base: "none", md: "dark-lg" }}
        display={{ base: "none", md: "block" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          h={10}
          mt={2}
        >
          <Logo to="/dashboard" size="lg" />
        </Box>
        <Divider colorScheme={"blackAlpha"} mt={4} />

        <VStack mt={8}>
          {SIDEBAR_ITEMS_USER.map((item, index) => (
            <Tooltip label={item.name} key={index}>
              <Link
                as={Router}
                to={item.route}
                display={"flex"}
                justifyContent={"center"}
                w={"100%"}
                _hover={{ textDecoration: "none" }}
              >
                <Box
                  p={4}
                  cursor={"pointer"}
                  h={10}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={1}
                  _hover={{ bg: "#F1F1F1" }}
                  borderRadius={"md"}
                >
                  <Flex
                    h={"100%"}
                    alignItems={"center"}
                    w={"100%"}
                    justifyContent={"center"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Icon
                        as={item.icon}
                        boxSize={6}
                        color={
                          pathname === item.route ? "teal.500" : "gray.500"
                        }
                      />
                    </Box>
                  </Flex>
                </Box>
              </Link>
            </Tooltip>
          ))}
          <Tooltip label={"Logout"}>
            <Link
              as={Router}
              to={"/"}
              display={"flex"}
              justifyContent={"center"}
              w={"100%"}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                p={4}
                cursor={"pointer"}
                h={10}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mt={1}
                _hover={{ bg: "#F1F1F1" }}
                borderRadius={"md"}
              >
                <Flex
                  h={"100%"}
                  alignItems={"center"}
                  w={"100%"}
                  justifyContent={"center"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Icon
                      as={IoIosLogOut}
                      boxSize={6}
                      color={"gray.500"}
                      onClick={handleLogout}
                    />
                  </Box>
                </Flex>
              </Box>
            </Link>
          </Tooltip>
        </VStack>
      </Box>
    </>
  );
};
