import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavBar from "./modules/MyNavBar";
import MyFooter from "./modules/MyFooter";
import MyJumbotron from "./modules/MyJumbotron";
// import { Jumbotron, Button, Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
class App extends React.Component {
  render() {
    return (
      <>
        <MyNavBar title="M4-D2" />
        <MyJumbotron />

        <Container>
          <Jumbotron>
            <h1>Hello, Jumbotron in a container!</h1>
            <p>This should be a non-fluid jumbotron.</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Container>

        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <MyFooter />
      </>
    );
  }
}

export default App;
