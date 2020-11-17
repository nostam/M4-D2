import React from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavBar from "./modules/MyNavBar";
import MyFooter from "./modules/MyFooter";
import MyJumbotron from "./modules/MyJumbotron";
import MyShelf from "./modules/MyShelf";
import SelectBooks from "./modules/SelectBooks";
class App extends React.Component {
  state = {
    category: ["scifi", "horror", "fantasy", "romance", "history"],
  };
  render() {
    return (
      <>
        <MyNavBar title="Book store!" />{" "}
        <Container>
          <MyJumbotron />
          <MyShelf />
          <SelectBooks />
          <MyFooter />
        </Container>
      </>
    );
  }
}

export default App;
