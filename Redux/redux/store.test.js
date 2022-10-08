import reducer from "./reducer";
import store from "./store";
// const mockedReducer = (
//   state = { value: 0 },
//   action
// ) => {
//   return state;
// };

jest.mock("./reducer", () =>
  jest.fn(
    (state = { value: 0 }, action) => {
      return state;
    }
  )
);

describe("store", () => {
  it("store is set up", async () => {
    // reducer.mockImplementation(
    //   mockedReducer
    // );
    // const { default: store } =
    //   await import("./store");
    const { value } = store.getState();
    expect(value).toEqual(0);
  });
});
