import { Box, Spinner as ChakraSpinner, SpinnerProps } from "@chakra-ui/react";

export const Spinner = (props: SpinnerProps) => {
  return (
    <Box p={8} alignItems="center">
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        {...props}
      />
    </Box>
  );
};
