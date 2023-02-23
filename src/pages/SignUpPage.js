import React, { useState } from "react";
import "./SignUpPage.css";
import Button from "./components/Button";
import InputField from "./components/InputFiled";

export default function SignUpPage() {
  const [fields, setFields] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Mobile: "",
    checkbox: false,
  });
  const [fields2, setFields2] = useState({
    Name: "Prabal",
    UserName: "Username",
    Email: "P@fmail.com",
    Mobile: "7894561234",
    checkbox: true,
  });

  const handleChange = (e, name) => {
    if (name === "checkbox") {
      setFields({ ...fields, [name]: e });
      return;
    }
    setFields({ ...fields, [name]: e.target.value });
  };

  const OnSignUpClick = (e) => {
    setFields2(fields);
    console.log(fields);
  };

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
            <InputField
              placeholder="Name"
              changeFunction={handleChange}
              data={fields2}
            ></InputField>
            <InputField
              placeholder="UserName"
              changeFunction={handleChange}
              data={fields2}
            ></InputField>
            <InputField
              data={fields2}
              placeholder="Email"
              changeFunction={handleChange}
            ></InputField>
            <InputField
              data={fields2}
              placeholder="Mobile"
              changeFunction={handleChange}
            ></InputField>
          </div>
          <div className="checkbox-conatiner flex-row">
            <InputField
              data={fields2}
              type="checkbox"
              placeholder="Mobile"
              changeFunction={handleChange}
            ></InputField>
          </div>
          <Button onclick={OnSignUpClick} name="SIGN UP"></Button>
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
