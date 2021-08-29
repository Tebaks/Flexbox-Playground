import React from "react";
import "./ButtonWrapper.css";

const ButtonWrapper = ({ title, children }) => {
  return (
    <div className="button-wrapper">
      <h2>{title}</h2>
      <div className="button-list">{children}</div>
    </div>
  );
};

export default ButtonWrapper;
