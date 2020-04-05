import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./signin.styles.scss";
import CustomButton from "../custom-buttom/custom-buttom.components";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Invalid email and password", error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            required
            value={this.state.email}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            required
            value={this.state.password}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
