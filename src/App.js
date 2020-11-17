import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./modules/NavBar";
import Footer from "./modules/Footer";
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="M4-D2" />
        <Footer />
      </>
    );
  }
}

export default App;
