import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

const MyJumbotron = (props) => {
  return (
    <Container>
      <Jumbotron className="mt-5">
        <h1>Hello, Strangers!</h1>
        <p>Pick a book you like!</p>
        <hr className="my-4" />

        <p>...but do you read books?</p>
        <Button variant="primary">Learn more</Button>
      </Jumbotron>
    </Container>
  );
};
export default MyJumbotron;
