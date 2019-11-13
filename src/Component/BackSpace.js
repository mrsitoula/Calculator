import React, { Component } from "react";
import "./BackSpace.css";

export default class BackSpace extends Component {
  render() {
    return (
      <div className="BackButton" onClick={this.props.handleClick}>
        {this.props.children}
      </div>
    );
  }
}
