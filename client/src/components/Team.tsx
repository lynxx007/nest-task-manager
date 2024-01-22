import { Avatar, AvatarGroup, Box, Highlight, Text } from "@chakra-ui/react";
import { useAppSelector } from "../hooks/Redux/customHooks";

export const Team = () => {
  const teams = useAppSelector((state) => state.users.user?.teams);
  return (
    <>
      <Box w={"23%"} display={["none", "none", "block"]} p={4}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"x-small"} fontWeight={"bold"}>
            <Highlight query="(25)" styles={{ color: "blue" }}>
              Team(25)
            </Highlight>
          </Text>
        </Box>
        <Box>
          <AvatarGroup size="sm" max={4} mt={4} spacing={1}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
};
