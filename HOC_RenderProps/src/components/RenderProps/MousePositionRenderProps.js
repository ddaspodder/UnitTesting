import React, { Component } from "react";

class MousePositionRenderProps extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    const { x, y } = this.state;

    return this.props.render({ x, y });
  }
}

export default MousePositionRenderProps;
