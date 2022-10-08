import React from "react";
import { render, screen } from "@testing-library/react";
import CounterPage from "../CounterPage";
// import Counter from "../../components/Counter";
//shallow rendering
jest.mock("../../components/Counter", () => () => "");
describe("testing counter", () => {
  it("counter should render properly", () => {
    render(<CounterPage />);
    screen.getByText("CounterPage");
  });
});
