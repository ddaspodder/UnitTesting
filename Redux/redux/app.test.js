import app from "./app"
import counter from "./counter";

jest.mock("./counter", () =>
  jest.fn(
    jest.requireActual("./counter")
      .default
  )
);

describe("counter", () => {
  it("counter subscription works", () => {
    expect(
      counter
    ).toHaveBeenCalledTimes(1);

    expect(counter).toHaveReturnedWith(
      20
    );
  });
});
