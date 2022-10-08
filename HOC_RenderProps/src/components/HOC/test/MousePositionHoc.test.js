import React from "react";
import { screen, render } from "@testing-library/react";
import withMousePosition from "../MousePositionHOC";
import Penguin from "../Penguin";

describe("test withMousePositionHOC", () => {
  test("should render correctly", () => {
    const MousePositionHOC = withMousePosition();
    render(<MousePositionHOC />);
    screen.getByText("X:0");
    screen.getByText("Y:0");
  });

  test("should work correctly with wrapped component", () => {
    const MousePositionHOC = withMousePosition(Penguin);
    render(<MousePositionHOC />);
    expect(screen.getByAltText("penguin")).toHaveStyle(
      "width: 50px; height: 50px; position: absolute; left: -25px; top: -25px;"
    );
  });
});
