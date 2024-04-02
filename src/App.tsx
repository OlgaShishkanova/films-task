import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/assets/scss/index.scss";
import RoutesComponent from "./RoutesComponent";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
