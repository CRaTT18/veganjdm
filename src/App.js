import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container fluid>
            <img src="images/logo.png"></img>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
