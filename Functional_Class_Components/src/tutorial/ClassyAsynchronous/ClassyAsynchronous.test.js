import React from "react";
import ClassyAsynchronous from "./index";
import { shallow, mount } from "enzyme";
import axios from "axios";

const wait = () => new Promise((res) => setTimeout(res));

//this should be at top level
jest.mock("axios");

beforeEach(() => {
  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: [],
    })
  );
});

describe("ClassyAsynchronous", () => {
  describe("shallow render", () => {
    it("should spyon and  call axios", async () => {
      const mockedAxios = jest.spyOn(axios, "get");

      // mockedAxios.mockImplementation(() =>
      //   Promise.resolve({
      //     data: [
      //       {
      //         userId: 1,
      //         id: 1,
      //         title:
      //           "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      //         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      //       },
      //     ],
      //   })
      // );

      shallow(<ClassyAsynchronous />);

      expect(mockedAxios).toHaveBeenCalled();

      mockedAxios.mockRestore();
    });

    it("should mock axios module and render component", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({
          data: [
            {
              userId: 1,
              id: 1,
              title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            },
          ],
        })
      );

      const wrapper = shallow(<ClassyAsynchronous />);

      //this waits for  data load and DOM update to happen
      await wait().then(() => {
        wrapper.update();
        expect(wrapper.find("li")).not.toHaveLength(0);
      });
    });

    it("should spyon and call componentDidMount", () => {
      const mockedComponentDidMount = jest.spyOn(
        ClassyAsynchronous.prototype,
        "componentDidMount"
      );
      // mockedComponentDidMount.mockImplementation(() => {});
      shallow(<ClassyAsynchronous />);
      expect(mockedComponentDidMount).toHaveBeenCalled();
      mockedComponentDidMount.mockRestore();
    });
  });
});
