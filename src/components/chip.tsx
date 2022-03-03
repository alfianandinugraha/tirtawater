import { Box, Text } from "@chakra-ui/layout";
import React from "react";

type ChipProps = {
  text: string;
  onClick?: () => void;
  active?: boolean;
};

const Chip = (props: ChipProps) => {
  return (
    <Box
      py={2}
      px={4}
      bg={props.active ? "blue.400" : "gray.100"}
      color={props.active ? "white" : ""}
      rounded="full"
      cursor="pointer"
      _hover={{
        bg: "blue.400",
        color: "white",
      }}
      onClick={props.onClick}
    >
      <Text>{props.text}</Text>
    </Box>
  );
};

export default Chip;
