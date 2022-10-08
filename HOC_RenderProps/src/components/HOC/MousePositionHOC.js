import React, { Component } from "react";

const withMousePosition = (WrappedComponent) => {
  class MousePositionHOC extends Component {
    state = {
      x: 0,
      y: 0,
    };
    componentDidMount() {
      document.addEventListener("mousemove", (e) => {
        this.setState({ x: e.clientX, y: e.clientY });
      });
    }
    render() {
      const { x, y } = this.state;
      return WrappedComponent ? (
        <WrappedComponent coords={{ x, y }} {...this.props} />
      ) : (
        <div>
          <h2>Mouse Position</h2>
          <h3>X:{x}</h3>
          <h3>Y:{y}</h3>
        </div>
      );
    }
  }

  return MousePositionHOC;
};
export default withMousePosition;
