import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import PenguinRenderProps from "../PenguinRenderProps";

describe("testing penguin render props", () => {
  test("should render correctly", () => {
    render(<PenguinRenderProps />);
    fireEvent.mouseMove(screen.getByAltText("penguin"), {
      clientX: "100",
      clientY: "100",
    });
    expect(screen.getByAltText("penguin")).toHaveStyle(
      "width: 50px; height: 50px; position: absolute; left: 75px; top: 75px;"
    );
  });
});
