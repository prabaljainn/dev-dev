import React from "react";
import "./SignUpPage.css";
import Button from "./components/Button";
import InputField from "./components/InputFiled";
export default function SignUpPage() {
  return (
    <div className="signup-page flex-row">
      <div className="leftside flex-column">
        <div className="container1-leftside flex-row">
          <p className="text-white roboto">Already have an account?</p>
          <Button name="LOGIN"></Button>
        </div>
        <div className="conatiner2-leftside flex">
          <p className="text-white conatiner2-leftside-text roboto">
            Discover new things on Superapp
          </p>
        </div>
      </div>
      <div className="rightside flex-column">
        <div className="rightside-container">
          <p className="text-white super-app">Super App</p>
          <p className="text-white">Create your new account</p>
          <div className="flex-row email-google">
            <a href="/" className="W500">
              Email
            </a>
            <div>&nbsp;&nbsp;</div>
            <div className="text-green">|</div>
            <div>&nbsp;&nbsp;</div>
            <a className="W500" href="/">
              {" "}
              Google
            </a>
          </div>
          <div className="input-container">
            <InputField placeholder="Name"></InputField>
            <InputField placeholder="UserName"></InputField>
            <InputField placeholder="Email"></InputField>
            <InputField placeholder="Mobile"></InputField>
          </div>
          <div className="checkbox-conatiner flex-row">
            <input type="checkbox" id="check" name="check" />
            <label htmlFor="check">
              Share my registration data with Superapp
            </label>
          </div>
          <Button name="SIGN UP"></Button>
          <p className="text-grey align-left">
            By clicking on Sign up. you agree to Superapp{" "}
            <a href="/">
              <span className="text-green">Terms and Conditions of Use</span>
            </a>
          </p>

          <p className="text-grey align-left">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <a href="/">
              <span className="text-green">Privacy Policy.</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
