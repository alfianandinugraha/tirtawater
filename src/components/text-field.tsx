import { Box, Input, Text } from "@chakra-ui/react";
import { Control, RegisterOptions, useController } from "react-hook-form";

type TextFieldProps = {
  control: Control;
  name: string;
  label?: string;
  rules?: RegisterOptions;
  type?: React.HTMLInputTypeAttribute;
};

function TextField(props: TextFieldProps) {
  const { field, fieldState } = useController({
    control: props.control,
    name: props.name,
    rules: props.rules,
  });
  console.log(fieldState);
  return (
    <Box>
      <Text
        as="label"
        textTransform="uppercase"
        fontWeight="semibold"
        color={fieldState.error ? "red.400" : "gray.400"}
      >
        {props.label}
      </Text>
      <Input
        mt="2"
        width="full"
        type={props.type ?? "text"}
        borderColor={fieldState.error ? "red.400" : "gray.200"}
        _focus={{
          borderColor: fieldState.error ? "red.400" : "blue.400",
        }}
        {...field}
      />
    </Box>
  );
}

export default TextField;
