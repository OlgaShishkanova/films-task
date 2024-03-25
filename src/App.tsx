import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TestPage1 } from "./pages/TestPage1";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}><TestPage1/></QueryClientProvider>
  );
}

export default App;
