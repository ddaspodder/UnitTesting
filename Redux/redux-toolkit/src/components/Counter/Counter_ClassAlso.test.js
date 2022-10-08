/*this one is experimentation, dont follow this
The first test suite render is overlapping with the next one ?
*/

import {
  render,
  fireEvent,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { connect } from "react-redux";
import Store from "../../store/store";
import { Provider } from "react-redux";
import { dummyReq } from "../../api/mock/counterREST";
// import { Counter } from "./Counter_Class";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  connect: jest.fn(),
}));

jest.mock(
  "../../api/mock/counterREST",
  () => ({
    dummyReq: jest.fn(),
  })
);

beforeEach(() => {});
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
              count={1}
              increment={increment}
              decrement={decrement}
            />
          );

      connect.mockImplementation(
        () => mockedConnectHOC
      );

      // connect.mockImplementation(
      //   jest.requireActual(
      //     "react-redux"
      //   ).connect
      // );

      const { default: CounterClass } =
        await import("./Counter_Class");

      render(<CounterClass />);

      // render(
      //   <Counter
      //     count={1}
      //     increment={increment}
      //     decrement={decrement}
      //   />
      // );
    });

    afterEach(() => {
      cleanup();
    });

    it("should render correctly", () => {
      expect(
        screen.getByText("Counter")
      ).toBeTruthy();

      expect(
        screen.getByText(1)
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

  describe("test counter connected with store", () => {
    beforeEach(async () => {
      connect.mockImplementation(
        jest.requireActual(
          "react-redux"
        ).connect
      );

      dummyReq.mockImplementation(
        () =>
          new Promise((res) =>
            setTimeout(res, 0)
          )
      );

      const { default: Counter_Class } =
        await import("./Counter_Class");

      render(
        <Provider store={Store}>
          <Counter_Class />
        </Provider>
      );
    });

    afterEach(() => {
      cleanup();
    });

    it("should have the default state", () => {
      expect(
        screen.getByText(0)
      ).toBeTruthy();
    });

    it("should increment on click", async () => {
      fireEvent.click(
        screen.getByText("Increment")
      );

      await waitFor(() => {
        expect(
          screen.getByText(1)
        ).toBeTruthy();
      });
    });
  });
});
