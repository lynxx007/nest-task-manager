import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/SideBar";
import { FaBars, FaSearch } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link as Router } from "react-router-dom";
import { useAppSelector } from "../hooks/Redux/customHooks";

export const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useLocation();
  const user = useAppSelector((state) => state.users.user);
  return (
    <Flex direction={"row"} h={"100vh"}>
      <Sidebar isOpen={isOpen} onClose={onClose} />

      <Box maxH={"100vh"} overflow={"auto"} flex={"1"}>
        <Flex
          p={6}
          alignItems={"center"}
          justifyContent={["space-around", "space-between"]}
        >
          {/* Button to open the drawer on small screens */}
          <Icon
            as={FaBars}
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
            cursor={"pointer"}
            boxSize={4}
          />

          <Box display={["none", "none", "flex"]} alignItems={"center"} mr={2}>
            <Link
              as={Router}
              to={"/dashboard"}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                fontWeight={pathname === "/dashboard" ? "bold" : "normal"}
                fontSize={"sm"}
              >
                My Project
              </Text>
            </Link>

            <Link
              as={Router}
              to={"/dashboard/planning"}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                ml={2}
                fontSize={"sm"}
                fontWeight={
                  pathname === "/dashboard/planning" ? "bold" : "normal"
                }
              >
                Planning
              </Text>
            </Link>

            <Link
              as={Router}
              to={"/dashboard/team"}
              ml={2}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                ml={2}
                fontSize={"sm"}
                fontWeight={pathname === "/dashboard/team" ? "bold" : "normal"}
              >
                Team
              </Text>
            </Link>
          </Box>
          <Spacer />
          <InputGroup maxW={"300px"} ml={["2", 0]}>
            <InputLeftElement>
              <FaSearch />
            </InputLeftElement>
            <Input type="text" placeholder="find your project name..." />
          </InputGroup>

          <Spacer />
          <Icon
            ml={2}
            as={colorMode === "light" ? CiLight : CiDark}
            onClick={toggleColorMode}
          />

          <Box
            display={["none", "none", "flex"]}
            alignItems={"center"}
            justifyItems={"center"}
            ml={2}
          >
            <Avatar
              src={user?.avatar}
              size={"sm"}
              name={user?.username}
              icon={<FaUser />}
            />
            <Box display={"block"} p={2}>
              <Text fontSize={"x-small"}>{user?.username}</Text>

              <Text fontSize={"x-small"}>{user?.email}</Text>
            </Box>

            <Icon
              as={IoIosNotificationsOutline}
              ml={10}
              boxSize={4}
              cursor={"pointer"}
            />
          </Box>
        </Flex>

        <Divider boxShadow={"dark-lg"} />

        <Box as="main" pt={3} minH={"100vh"}>
          <Container maxW="container.xl" minH={"100vh"}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};
