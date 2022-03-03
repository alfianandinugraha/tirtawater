import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: React.ReactNode;
  buttons?: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      {props.open ? (
        <>
          <Box
            position="fixed"
            zIndex="10"
            w="100%"
            h="100%"
            top="0"
            display="flex"
          >
            <Box
              boxShadow="lg"
              rounded="lg"
              minW="500px"
              p="8"
              bg="white"
              flexShrink="0"
              m="auto"
            >
              <HStack mb="4" alignItems="center" justifyContent="space-between">
                <Heading as="h3" fontSize="2xl">
                  {props.title}
                </Heading>
                <AiOutlineCloseCircle
                  size="22"
                  cursor="pointer"
                  color="lightgray"
                  onClick={props.onClose}
                />
              </HStack>
              {props.children}
              <HStack spacing="4" justifyContent="end" mt="4">
                {props.buttons}
              </HStack>
            </Box>
          </Box>
          <Box
            position="fixed"
            zIndex="5"
            w="100%"
            h="100%"
            bg="black"
            top="0"
            left="0"
            opacity="25%"
          />
        </>
      ) : null}
    </>,
    document.getElementById("root")!
  );
};

export default Modal;
