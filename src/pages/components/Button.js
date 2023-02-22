import React from "react";
import "./components.css";
export default function Button(props) {
  if (props.name === "LOGIN") {
    return <button className="btn login">{props.name}</button>;
  } else {
    return <button className="btn signup">{props.name}</button>;
  }
}
