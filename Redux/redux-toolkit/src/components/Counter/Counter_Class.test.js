import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import Store from "../../store/store";
import { Provider } from "react-redux";
import { dummyReq } from "../../api/mock/counterREST";
import Counter_Class, {
  Counter,
} from "./Counter_Class";

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

      render(
        <Counter
          count={0}
          increment={increment}
          decrement={decrement}
        />
      );
    });
    it("should render correctly", () => {
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

  describe("test counter connected with store", () => {
    beforeEach(async () => {
      dummyReq.mockImplementation(
        () =>
          new Promise((res) =>
            setTimeout(res, 0)
          )
      );

      render(
        <Provider store={Store}>
          <Counter_Class />
        </Provider>
      );
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
