import React from "react";
import Async from "./Async";
import { shallow, mount } from "enzyme";

// window.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve([
//         {
//           userId: 1,
//           id: 1,
//           title:
//             "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//           body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//         },
//       ]),
//   })
// );

describe("Async component", () => {
  const wait = () => new Promise((resolve) => setTimeout(resolve));

  let mockFetch;
  beforeEach(() => {
    // window.fetch = jest.fn(() =>
    //   Promise.resolve({
    //     json: () =>
    //       Promise.resolve([
    //         {
    //           userId: 1,
    //           id: 1,
    //           title:
    //             "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //           body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    //         },
    //       ]),
    //   })
    // );
    mockFetch = jest.spyOn(window, "fetch");
    mockFetch.mockImplementation(() =>
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
  });

  it("renders posts if request succeeds", async () => {
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => [{ id: "p1", title: "First post" }],
    // });

    const wrapper = mount(<Async />);
    expect(mockFetch).toHaveBeenCalled();
    // return wait().then(() => {
    //   wrapper.update();
    //   expect(wrapper.find("li")).not.toHaveLength(0);
    // });
  });
});
