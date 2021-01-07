import React, { Component } from "react";
import fire from "../config/fire";

export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        this.setState({ fireErrors: error.message });
        // ..
      });
  };

  register = (event) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        this.setState({ fireErrors: error.message });
        // ..
      });
  };

  getAction = (action) => {
    if (action === "reg") {
      this.setState({
        formTitle: "Register User",
        loginBtn: false,
        fireErrors: "",
      });
    } else {
      this.setState({
        formTitle: "Login",
        loginBtn: true,
        fireErrors: "",
      });
    }
  };

  render() {
    let errNotification = this.state.fireErrors ? (
      <div className="Error">{this.state.fireErrors}</div>
    ) : null;

    let submitBtn = this.state.loginBtn ? (
      <input
        className="loginbtn"
        type="submit"
        onClick={this.login}
        value="Enter"
      ></input>
    ) : (
      <input
        className="loginbtn"
        type="submit"
        onClick={this.register}
        value="Register"
      ></input>
    );
    let login_register = this.state.loginBtn ? (
      <button className="registerBtn" onClick={() => this.getAction("reg")}>
        register
      </button>
    ) : (
      <button className="registerBtn" onClick={() => this.getAction("login")}>
        Login
      </button>
    );
    return (
      <div className="form-block">
        <div id="tittle">{this.state.formTitle}</div>
        <div className="body">
          {errNotification}
          <form>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />

            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />

            {submitBtn}
          </form>
          {login_register}
        </div>
      </div>
    );
  }
}
