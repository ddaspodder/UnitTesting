import Actual from "./actual";
jest.mock("./actual");

// beforeEach(() => {
//   Actual.actual.mockImplementation(() => "I am mocked function");
// });

describe("SimpleJSMock", () => {
  it("should work", async () => {
    Actual.mockReturnValue("I am mocked function");
    const { default: SimpleJSMock } = await import("./index");
    expect(SimpleJSMock).toEqual("I am mocked function");
  });
});
