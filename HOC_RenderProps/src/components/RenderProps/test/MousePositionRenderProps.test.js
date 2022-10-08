import React from "react";
import { screen, render } from "@testing-library/react";
import MousePositionRenderProps from "../MousePositionRenderProps";

describe("testing MousePositionRenderProps", () => {
  test("should render correctly", () => {
    render(<MousePositionRenderProps render={() => <div>Test</div>} />);
    screen.getByText("Test");
  });
});
