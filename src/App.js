import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ScrollToTop />
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
