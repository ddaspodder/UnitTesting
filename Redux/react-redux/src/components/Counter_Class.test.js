// import Counter_Class from "./Counter_Class";
import {
  render,
  fireEvent,
  screen,
} from "@testing-library/react";
import { connect } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  connect: jest.fn(),
}));

describe("Counter", () => {
  describe("test counter disconnected from store", () => {
    let increment, decrement;

    beforeEach(async () => {
      increment = jest.fn();
      decrement = jest.fn();

      const mockedConnectHOC =
        (Comp) => (props) =>
          (
            <Comp
              {...props}
              count={0}
              increment={increment}
              decrement={decrement}
            />
          );

      connect.mockImplementation(
        () => mockedConnectHOC
      );

      const { default: CounterClass } =
        await import("./Counter_Class");

      render(<CounterClass />);
    });
    it("should render correctly", async () => {
      expect(
        screen.getByText("Counter")
      ).toBeTruthy();

      expect(
        screen.getByText(0)
      ).toBeTruthy();
    });

    it("should call increment on click", () => {
      fireEvent.click(
        screen.getByText("Increment")
      );
      expect(
        increment
      ).toHaveBeenCalled();
    });
  });
});
