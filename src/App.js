import "./App.css";
import fire from "./config/fire";
import React, { Component } from "react";
import LoginRegister from "./components/LoginRegister";
import Home from "./components/Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.authListner();
  }
  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <Home /> : <LoginRegister />}</div>;
  }
}
