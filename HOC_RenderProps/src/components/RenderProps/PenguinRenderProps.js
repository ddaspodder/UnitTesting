import React from "react";
import MousePositionRenderProps from "./MousePositionRenderProps";

export const Penguin = ({ x, y }) => (
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
);

const PenguinRenderProps = () => {
  return (
    <div>
      <h2>Penguin Render Props</h2>
      <MousePositionRenderProps render={Penguin} />
    </div>
  );
};

export default PenguinRenderProps;
