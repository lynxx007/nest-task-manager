import {
  Text,
  Flex,
  IconButton,
  Box,
  Spacer,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { FaInstagram, FaGithub, FaHeart } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";
export const TopBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Box display={"flex"} alignItems={"center"}>
        <Logo to={"/"} />
        <Text fontSize={"medium"} ml={2} fontWeight={"bold"} color={"teal.500"}>
          Task Manager
        </Text>
      </Box>
      <Spacer />
      <Box display={"flex"} alignItems={"center"} ml={"auto"}>
        <Icon
          as={colorMode === "light" ? CiLight : CiDark}
          onClick={toggleColorMode}
          boxSize={"25px"}
          pt={1}
          cursor={"pointer"}
        />
        <IconButton
          aria-label="Instagram"
          icon={<FaInstagram />}
          boxSize={"30px"}
          isRound
          colorScheme="teal"
          variant={"outline"}
          mt={2}
          ml={2}
          as={"a"}
          href="https://www.instagram.com/luthfirizzky"
        />
        <IconButton
          aria-label="Github"
          icon={<FaGithub />}
          boxSize={"30px"}
          isRound
          colorScheme="teal"
          variant={"outline"}
          mt={2}
          ml={2}
          as={"a"}
          href="https://github.com/lynxx007"
        />
        <Flex
          alignItems={"center"}
          mt={2}
          ml={2}
          as="button"
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={1}
        >
          <Icon as={FaHeart} color={"red.500"} />
          <Text ml={2} fontSize={"sm"} fontFamily={"mono"}>
            Sponsor
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
