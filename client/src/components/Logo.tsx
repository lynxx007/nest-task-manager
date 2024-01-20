import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = ({
  size,
  to,
}: {
  size?: "sm" | "md" | "lg";
  to: string;
}) => {
  return (
    <IconButton
      isRound={true}
      aria-label="Home"
      colorScheme="teal"
      as={Link}
      to={to}
      size={size}
      icon={
        <img src="/task-square-svgrepo-com.svg" alt="Task Manager" width={24} />
      }
    />
  );
};
