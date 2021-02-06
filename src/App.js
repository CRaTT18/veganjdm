import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container fluid>
            <img src="images/logo.png" width="600" alt="Vegan Jerky Deathmatch Logo"></img>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
