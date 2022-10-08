import {
  CounterReducer,
  TaskReducer,
} from "./store";

import Store from "./store";

describe("Counter Reducer", () => {
  it("return initial default state", () => {
    const { count } = CounterReducer(
      { count: 0 },
      { type: "" }
    );
    expect(count).toEqual(0);
  });

  it("increments", () => {
    const { count } = CounterReducer(
      { count: 0 },
      { type: "increment" }
    );
    expect(count).toEqual(1);
  });

  it("decrements", () => {
    const { count } = CounterReducer(
      { count: 0 },
      { type: "decrement" }
    );
    expect(count).toEqual(-1);
  });
});

describe("task redcer", () => {
  it("returns default state", () => {
    const { tasks } = TaskReducer(
      {
        tasks: [],
      },
      { type: "" }
    );

    expect(tasks).toHaveLength(0);
  });
  it("adds task", () => {
    const { tasks } = TaskReducer(
      {
        tasks: [],
      },
      {
        type: "add",
        payload: "gardening",
      }
    );

    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toEqual(
      "gardening"
    );
  });
  it("removes task", () => {
    const { tasks } = TaskReducer(
      {
        tasks: [
          "gardening",
          "cooking",
          "washing",
        ],
      },
      {
        type: "remove",
        payload: 1,
      }
    );
    expect(tasks).toHaveLength(2);
    expect(tasks[1]).toEqual("washing");
  });
});

describe("store", () => {
  it("store retuens the correct default state", () => {
    const { counter } =
      Store.getState();

    expect(counter.count).toEqual(0);
  });

  it("store working correctly", () => {
    Store.dispatch({
      type: "add",
      payload: "gardening",
    });

    const {
      tasks: { tasks },
    } = Store.getState();

    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toEqual(
      "gardening"
    );
  });
});
