import reducer from "./reducer";

describe("reducer", () => {
  it("increment action", () => {
    const state = reducer(
      { count: 0 },
      { type: "increment", payload: 10 }
    );

    expect(state.count).toEqual(10);
  });
});
