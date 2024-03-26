import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/scss/index.scss";
import RoutesComponent from "./RoutesComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesComponent />
    </QueryClientProvider>
  );
}

export default App;
