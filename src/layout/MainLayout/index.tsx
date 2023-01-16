import { ReactNode } from "react";

import { Content } from "../../components/layout/MainLayout/Content";
import { Footer } from "../../components/layout/MainLayout/Footer";
import { Header } from "../../components/layout/MainLayout/Header";
import { Box, Flex } from "@chakra-ui/layout";

interface MainLayoutProps {
  children?: ReactNode | ReactNode[] | string;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Flex direction="column">
      {/* <Header /> */}

      <Content>{children}</Content>

      <Box as='footer'>
      <Footer />
      </Box>
    </Flex>
  );
}
