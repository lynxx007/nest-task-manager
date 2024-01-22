import { Box, Icon, Text } from "@chakra-ui/react";
import { IoBarChartSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosCloudDone } from "react-icons/io";
export const TaskCard = () => {
  return (
    <Box
      maxW={"150px"}
      boxShadow={"dark-lg"}
      rounded={"md"}
      p={4}
      height={"100%"}
      bgColor={"#FFCC70"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={2}
      >
        <Icon color={"white"} as={IoBarChartSharp} boxSize={5} />
        <Box>
          <Text fontFamily={"serif"} color={"white"} fontSize={"xs"}>
            Task
          </Text>
          <Text fontFamily={"serif"} color={"white"} fontSize={"xs"}>
            In Progress
          </Text>
        </Box>
        <Icon color={"white"} as={SlOptionsVertical} boxSize={3} />
      </Box>
    </Box>
  );
};
