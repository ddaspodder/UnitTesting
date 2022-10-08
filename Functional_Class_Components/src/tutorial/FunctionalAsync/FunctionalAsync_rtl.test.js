import React from "react";
import FunctionalAsync from ".";
import { render, screen, waitFor } from "@testing-library/react";

const mockedFetch = jest.spyOn(window, "fetch");

beforeEach(() => {
  mockedFetch.mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
});

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

describe("FunctionalAsync", () => {
  describe("full render", () => {
    beforeEach(() => {
      React.useEffect.mockImplementation(jest.requireActual("react").useEffect);
      render(<FunctionalAsync />);
    });
    it("should mock fetch", () => {
      expect(mockedFetch).toHaveBeenCalledTimes(1);
    });

    it("should render", async () => {
      mockedFetch.mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve([
              {
                userId: 1,
                id: 1,
                title:
                  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
              },
            ]),
        })
      );

      render(<FunctionalAsync />);
      await waitFor(() => {
        expect(screen.queryAllByRole("listitem")).toHaveLength(1);
      });
    });

    it("should spy on and call useEffect", () => {
      expect(React.useEffect).toHaveBeenCalled();
    });
  });
});
