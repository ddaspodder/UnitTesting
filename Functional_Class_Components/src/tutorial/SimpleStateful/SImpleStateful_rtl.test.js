import React from "react";
import Counter from ".";
import { fireEvent, render, screen } from "@testing-library/react";

beforeEach(() => {
  render(<Counter />);
});

describe("Counter", () => {
  it("should render", () => {
    expect(screen.getByText("0")).toBeTruthy();
  });

  it("should get incremented on button click", async () => {
    const button = screen.getByText("Increment");
    fireEvent.click(button);
    await screen.findByText("1");
  });

  it("should get decremented on button click", async () => {
    const button = screen.getByText("Decrement");
    fireEvent.click(button);
    await screen.findByText("-1");
  });
});
