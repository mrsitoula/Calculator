import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };
  render() {
    return (
      <div
        className={`Button ${
          this.isOperator(this.props.children) ? "" : "Operator"
        }`}
        onClick={() => {
          this.props.handleClick(this.props.children);
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
