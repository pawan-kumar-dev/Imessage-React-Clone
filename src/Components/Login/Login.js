import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../Config/firebase";
const Login = () => {
  const signIn = e => {
    e.preventDefault();
    //   before this enable the authentication in your firebase and select the google //method

    // signin with the auth protocol //This will update the authUser and in App.js will listen to
    // whenever the user changes
    auth.signInWithPopup(provider).catch(err => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="logo"
        />
        <div className="login__text">
          <h1>Sign in to I-Message</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
