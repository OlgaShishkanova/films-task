import { screen, render, cleanup, waitFor } from "@testing-library/react";
import MoviesList from "../MoviesList";
import { server } from "@/testsMocks/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("MoviesList", () => {
  beforeEach(() => {
    cleanup();
  });
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });
  afterAll(() => {
    server.close();
  });

  it("shows loader when loading", () => {
    render(
      <Wrapper>
        <MoviesList />
      </Wrapper>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.queryByText(/A New Hope/i)).not.toBeInTheDocument();
  });
  it("shows data when there is data", async () => {
    render(
      <Wrapper>
        <MemoryRouter>
          <MoviesList />
        </MemoryRouter>
      </Wrapper>
    );
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
      expect(screen.getByText(/A New Hope/i)).toBeInTheDocument();
    });
  });
});
