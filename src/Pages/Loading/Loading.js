import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Spinner
        className="mt-4 mb-4 text-center"
        animation="border"
        variant="danger"
      />
    </div>
  );
};

export default Loading;
