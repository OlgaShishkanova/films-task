import React from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
