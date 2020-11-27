import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import logo from "./logo.png";
import { auth, provider } from "./firebase";
import GitHubIcon from "@material-ui/icons/GitHub";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
        <h1>&nbsp;&nbsp;TextMe</h1>
        <br></br>
        <a href="https://github.com/kjamak">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <GitHubIcon />
          <br></br>
          <small>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kenan Jamakovic
          </small>
        </a>
      </div>

      <Button onClick={signIn}>Sign in </Button>
    </div>
  );
}

export default Login;
