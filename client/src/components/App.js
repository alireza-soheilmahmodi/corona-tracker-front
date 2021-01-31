import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCovid();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>test</div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
