import React from "react";
import useMousePosition from "../hooks/useMousePosition";

const PenguinHooks = () => {
  const { x, y } = useMousePosition();

  return (
    <React.Fragment>
      <h2>Penguin</h2>
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
};

export default PenguinHooks;
