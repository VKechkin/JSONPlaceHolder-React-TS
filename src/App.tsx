import React from "react";
import { useRoutes } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { Header, Footer } from "@components";

import Routes from "./Routes";

export const App = () => {
  const routes = useRoutes(Routes);

  return (
    <ChakraProvider>
      <Header />
      {routes}
      <Footer />
      <ColorModeScript />
    </ChakraProvider>
  );
};
