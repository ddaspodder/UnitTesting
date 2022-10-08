import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Counter from "../Counter";

describe("testing counter", () => {
  it("counter should render properly", () => {
    render(<Counter />);
    screen.getByText("Counter: 0");
  });
  it("should increment the counter on click", async () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() => screen.getByText("Counter: 1"));
  });
});
