import Store, {
  counterThunkActions,
  counterActions,
} from "./store";
import { waitFor } from "@testing-library/react";
import { dummyReq } from "../api/mock/counterREST";

//need to mock to reduce the timeout for "waitFor" to work

jest.mock(
  "../api/mock/counterREST",
  () => ({
    dummyReq: jest.fn(),
  })
);

beforeEach(() => {
  dummyReq.mockImplementation(
    () =>
      new Promise((res) =>
        setTimeout(res, 0)
      )
  );
});
describe("Counter", () => {
  it("Counter store has correct initial state", async () => {
    const {
      counter: { count },
    } = Store.getState();

    expect(count).toEqual(0);
  });

  it("should increment", async () => {
    Store.dispatch(
      counterThunkActions.increment()
      //   counterActions.increment()
    );

    await waitFor(() => {
      const {
        counter: { count },
      } = Store.getState();
      expect(count).toEqual(1);
    });
  });
});
