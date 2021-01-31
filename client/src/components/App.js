import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./app.css";
import Navber from "./Navbar";
import Sidebar from "./Sidebar";

const Content = () => <h1>content 1</h1>;
const Contentf = () => <h1>content 2</h1>;

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchCovid();
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navber />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <div className="col-md-9 col-lg-10 col-sm-12" id="main">
                <Route exact path="/" component={Content} />
                <Route exact path="/patients" component={Contentf} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
