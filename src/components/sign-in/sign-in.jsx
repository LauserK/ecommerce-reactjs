import React, { Component } from "react";

import "./sign-in.scss";
import { SignIn } from "../../pages/SignIn/sign-in";
import { FormInput } from "../form-input/form-input";
import { CustomButton } from "../custom-button/custom-button";

class SignInComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with yourt email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            value="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit">Submit Form</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
