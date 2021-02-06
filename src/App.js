import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Jumbotron fluid>
        <Container fluid>
          <img src="/public/assets/images/vjd_logo.png" width="600" alt="vegan jerky death match logo"/>
        </Container>
      </Jumbotron>
            </div>
        );
    }
}

export default App;
