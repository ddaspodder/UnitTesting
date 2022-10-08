import React, {
  useEffect,
} from "react";
import FunctionalAsync from ".";
import { mount, shallow } from "enzyme";

const mockedFetch = jest.spyOn(
  window,
  "fetch"
);

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
    let wrapper;
    beforeEach(() => {
      useEffect.mockImplementation(
        jest.requireActual("react")
          .useEffect
      );
      wrapper = mount(
        <FunctionalAsync />
      );
    });
    it("should mock fetch", () => {
      expect(
        mockedFetch
      ).toHaveBeenCalledTimes(1);
    });

    it("should render", async () => {
      mockedFetch.mockImplementation(
        () =>
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

      wrapper = mount(
        <FunctionalAsync />
      );

      await new Promise((res) =>
        setTimeout(res)
      ).then(() => {
        wrapper.update();
        expect(
          wrapper.find("li")
        ).toHaveLength(1);
      });
    });

    it("should spy on and call useEffect", () => {
      mount(<FunctionalAsync />);
      expect(
        React.useEffect
      ).toHaveBeenCalled();
    });
  });
});
