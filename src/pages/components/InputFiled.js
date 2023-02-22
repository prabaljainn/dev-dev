import React from "react";
import "./components.css";
export default function InputField(props) {
  return (
    <div className="txtfield">
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}
