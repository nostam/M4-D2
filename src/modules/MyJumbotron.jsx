import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const MyJumbotron = (props) => {
  return (
    <Jumbotron>
      <h1>Hello, MyJumbotron!</h1>
      <p>This should be a non-fluid jumbotron.</p>
      {/* <p> */}
      <Button variant="primary">Learn more</Button>
      {/* </p> */}
    </Jumbotron>
  );
};
export default MyJumbotron;
