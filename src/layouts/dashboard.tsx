import Sidebar from "@/components/sidebar";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <Box display="flex" alignItems="stretch" minH="100vh">
      <Sidebar />
      <Box as="main" p="8" bg="gray.50" width="full">
        <Box bg="white" p="6" boxShadow="md" borderRadius="md">
          <HStack alignItems="center" justifyContent="space-between">
            <Heading as="h1" mb="4">
              {props.title}
            </Heading>
            {props.action}
          </HStack>
          <Box>{props.children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
