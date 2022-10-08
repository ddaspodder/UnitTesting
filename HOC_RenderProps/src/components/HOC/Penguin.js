import React, { Component } from "react";
import withMousePosition from "./MousePositionHOC";
export class Penguin extends Component {
  render() {
    const { coords } = this.props;
    const { x, y } = coords;
    return (
      <React.Fragment>
        <img
          src="/penguin.png"
          alt="penguin"
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            left: x - 25,
            top: y - 25,
          }}
        />
      </React.Fragment>
    );
  }
}

export default withMousePosition(Penguin);
