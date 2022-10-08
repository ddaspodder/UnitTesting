import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import ToDo from "./toDo";
import {
  screen,
  render,
  fireEvent,
  within,
} from "@testing-library/react";

import { Provider } from "react-redux";
import Store from "../../store/store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

beforeEach(() => {
  useSelector.mockImplementation(
    jest.requireActual("react-redux")
      .useSelector
  );

  useDispatch.mockImplementation(
    jest.requireActual("react-redux")
      .useDispatch
  );
});

describe("toDo", () => {
  describe("testing disconnected from store", () => {
    it("should render correctly", () => {
      useSelector.mockImplementation(
        () => [
          "cooking",
          "gardening",
          "washing",
        ]
      );

      useDispatch.mockImplementation(
        () => {}
      );

      render(<ToDo />);
      expect(
        screen.getAllByRole("listitem")
      ).toHaveLength(3);
    });
  });

  describe("testing connected with store", () => {
    beforeEach(() => {
      render(
        <Provider store={Store}>
          <ToDo />
        </Provider>
      );
    });
    it("should render correctly", () => {
      expect(
        screen.getByText("ToDo")
      ).toBeTruthy();

      expect(
        screen.queryByRole("listitem")
      ).toBeFalsy();
    });

    it("should add item to the list", () => {
      fireEvent.click(
        screen.getByText("Add Task")
      );

      expect(
        screen.getAllByRole("listitem")
      ).toHaveLength(1);
    });

    it("should remove item from the list", () => {
      //for adding elements
      fireEvent.click(
        screen.getByText("Add Task")
      );
      fireEvent.click(
        screen.getByText("Add Task")
      );

      const removedItem =
        screen.getAllByRole(
          "listitem"
        )[1];

      const removedItemTextContent =
        screen.getAllByRole(
          "listitem"
        )[1].textContent;

      fireEvent.click(
        within(removedItem).getByText(
          "Remove"
        )
      );

      expect(
        screen.getAllByRole(
          "listitem"
        )[1].textContent
      ).not.toEqual(
        removedItemTextContent
      );
    });
  });
});
