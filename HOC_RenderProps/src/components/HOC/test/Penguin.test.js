import React from "react";
import { screen, render } from "@testing-library/react";
import { Penguin } from "../Penguin";

describe("test penguin", () => {
  it("should render correctly", () => {
    render(<Penguin coords={{ x: 100, y: 100 }} />);
    console.log(screen.getByAltText("penguin").style.left);
    expect(screen.getByAltText("penguin").style.left).toEqual("75px");
    expect(screen.getByAltText("penguin").style.top).toEqual("75px");
  });
});
