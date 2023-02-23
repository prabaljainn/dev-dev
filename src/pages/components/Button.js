import React from "react";
import "./components.css";
export default function Button(props) {
  const onClick = (e) => {
    props.onclick(e);
  };

  if (props.name === "LOGIN") {
    return <button className="btn login">{props.name}</button>;
  } else {
    return (
      <button onClick={onClick} className="btn signup">
        {props.name}
      </button>
    );
  }
}
