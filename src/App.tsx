import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/home";
import { customTheme } from "./theme"


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
