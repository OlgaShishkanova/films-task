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
      <Container className="my-3">{children}</Container>
    </>
  );
};

export default MainLayout;
