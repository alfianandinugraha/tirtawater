import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { BiData } from "react-icons/bi";
import { FaWeight } from "react-icons/fa";
import { GiWeightCrush } from "react-icons/gi";
import { IconType } from "react-icons/lib";

type LinkProps = {
  icon: IconType;
  text: string;
};

const Link = (props: LinkProps) => {
  return (
    <HStack display="flex" alignItems="center" spacing="2" cursor="pointer">
      <props.icon size={20} />
      <Text>{props.text}</Text>
    </HStack>
  );
};

const Sidebar = () => {
  return (
    <Box
      as="aside"
      h="100vh"
      bgColor="blue.400"
      w="80"
      color="white"
      p="8"
      flexShrink="0"
    >
      <Heading as="h3" fontSize="3xl">
        Tirtawater
      </Heading>
      <Divider my="4" />
      <Text textTransform="uppercase" opacity="75" mb="3" fontWeight="bold">
        Main
      </Text>
      <VStack spacing="4" alignItems="start">
        <Link icon={BiData} text="Dataset" />
      </VStack>
      <Divider my="4" />
      <Text textTransform="uppercase" opacity="75" mb="3" fontWeight="bold">
        Method
      </Text>
      <VStack spacing="4" alignItems="start">
        <Link icon={GiWeightCrush} text="Weight Product Method" />
      </VStack>
    </Box>
  );
};

export default Sidebar;
