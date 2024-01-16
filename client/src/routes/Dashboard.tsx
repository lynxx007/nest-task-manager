import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Input,
  Menu,
  MenuButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TaskBox } from "../components/TaskBox";
import { IoIosAdd } from "react-icons/io";

export const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid templateColumns={["1fr", "3fr 1fr"]} gap={5}>
      <GridItem display={["none", "block"]}>test</GridItem>
      <Box display={["flex", "none"]} justifyContent={"flex-end"} mt={2} px={2}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<IoIosAdd />}
            variant={"outline"}
            borderRadius={"full"}
            borderWidth={"2px"}
            onClick={onOpen}
          />
        </Menu>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Task Name</FormLabel>
              <Input placeholder="Task Name" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <GridItem
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontFamily={"serif"} align={"center"} display={["none", "block"]}>
          Schedule
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          p={4}
          alignItems={"center"}
          w={"100%"}
        >
          <TaskBox />
        </Box>
      </GridItem>
    </Grid>
  );
};
