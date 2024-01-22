import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

export const TaskBox = () => {
  return (
    <Box
      w={"100%"}
      minW={"150px"}
      borderWidth="2px"
      borderRadius="lg"
      overflow={"hidden"}
      p={4}
      mt={2}
    >
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontFamily={"serif"} align={"left"} fontSize={"xx-small"}>
            08.00 AM - 09.00 AM
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BsThreeDotsVertical />}
              variant={"outline"}
              border={"none"}
              _hover={{ border: "none" }}
              height={"0px"}
            />
            <MenuList borderRadius={"md"} width={"50px"}>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Text fontFamily={"serif"} align={"left"} fontSize={"small"}>
          Meeting
        </Text>
        <AvatarGroup size="sm" max={2} mt={2} spacing={1}>
          <Avatar />
        </AvatarGroup>
      </Box>
    </Box>
  );
};
