import { Divider } from "@chakra-ui/react";

import { Team } from "./Team";

export const RightBar = () => {
  return (
    <>
      <Team />
      <Divider colorScheme="blackAlpha" />
    </>
  );
};
