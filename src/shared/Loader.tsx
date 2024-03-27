import React from "react";
import { Spinner } from "react-bootstrap";

const Loader: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner
        animation="border"
        role="status"
        style={{ width: "6rem", height: "6rem" }}
        variant="secondary"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
