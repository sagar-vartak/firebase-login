import React, { Component } from "react";
import fire from "../config/fire";

export default class Home extends Component {
  logout = (event) => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
