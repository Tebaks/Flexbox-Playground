import React from "react";
import "./Button.css";

const Button = ({ value, currentValue, text, onClick }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={"button-item " + (currentValue === value ? "active" : "disable")}
    >
      {text}
    </button>
  );
};

export default Button;
