import React, { useState } from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonValue: true,
    };
  }

  handleClick = () => {
    this.setState({
      buttonValue: !this.state.buttonValue,
    });
  };

  render() {
    console.log(this.state.buttonValue);

    return (
      <button onClick={this.handleClick}>
        {this.state.buttonValue ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
