import React from "react";
import "./sign-in.scss";

import SignInComponent from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

export const SignIn = () => (
  <div className="sign-in-and-sign-up">
    <SignInComponent />
    <SignUp />
  </div>
);
