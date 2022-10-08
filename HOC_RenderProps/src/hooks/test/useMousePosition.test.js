import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import useMousePosition from "../useMousePosition";

const TestComp = () => {
  const { x, y } = useMousePosition();
  return (
    <div>
      <p>x:{x}</p>
      <p>y:{y}</p>
    </div>
  );
};

describe("test useMousePosition", () => {
  test("should render correctly", () => {
    render(<TestComp />);
    screen.getByText("x:0");
    screen.getByText("y:0");
  });

  test("should update on mousemove", () => {
    render(<TestComp />);
    fireEvent.mouseMove(document, { clientX: "20", clientY: "20" });
    screen.getByText("x:20");
    screen.getByText("y:20");
  });
});
