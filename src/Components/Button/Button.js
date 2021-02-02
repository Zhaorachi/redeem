import React, { Component } from "react";
import "./BuyButton.css";

export default class BuyButton extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.label ? this.props.label : this.props.buttonName}
      </button>
    );
  }
}
