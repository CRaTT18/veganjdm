import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Match from "./MatchComponent";
import Rankings from "./RankingsComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { COMBATANTS } from "../shared/combatants";

const mapStateToProps = state => {
  return {
      combatants: state.combatants,
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      combatants: COMBATANTS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/match" component={Match} />
          <Route exact path="/rankings" component={Rankings} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
