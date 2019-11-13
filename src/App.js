import React, { Component } from "react";
import "./App.css";
import Input from "./Component/Input";
import ClearButton from "./Component/ClearButton";

import Button from "./Component/Button";
import BackButton from "./Component/BackSpace";
import * as math from "mathjs";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  //adding input value to state
  addToInput = value => {
    this.setState({
      input: this.state.input + value
    });
  };
  //Addiding codition before entering Zero to state
  addZeroToInput = value => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + value });
    }
  };
  //addiding condition before entering . to
  DecimalInput = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + value });
    }
  };

  clearInput = () => {
    this.setState({
      input: ""
    });
  };
  result = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };
  BackInput = () => {
    const ap = this.state.input;
    const dp = ap.slice(0, ap.length - 1);

    this.setState({
      input: dp
    });
  };

  render() {
    return (
      <div className="App">
        <div className="cal-wapper">
          <div className="row">
            <Input>{this.state.input} </Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.DecimalInput}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.result}>=</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <BackButton handleClick={this.BackInput}>Back</BackButton>

            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
