import React from "react";
import withMousePosition from "../MousePositionHOC";

import { render, screen } from "@testing-library/react";

jest.mock("../MousePositionHOC");

// beforeEach(() => {
//   withMousePosition.mockImplementation((Comp) => {
//     const Dummy = (props) => {
//       return <Comp coords={{ x: "100", y: "100" }} {...props} />;
//     };
//     return Dummy;
//   });
// });
beforeEach(() => {
  withMousePosition.mockImplementation(
    jest.requireActual("../MousePositionHOC").default
  );
});

describe("Cat", () => {
  it("the wrapped component should render correctly", async () => {
    withMousePosition.mockImplementation((Comp) => {
      const Dummy = (props) => {
        return <Comp coords={{ x: "100", y: "100" }} {...props} />;
      };
      return Dummy;
    });

    const { default: Cat } = await import("../Cat");
    render(<Cat />);
    expect(screen.getByAltText("cat").style.left).toEqual("75px");
    expect(screen.getByAltText("cat").style.left).toEqual("75px");
  });

  it("should render the hoc", () => {
    const MockedWrappedComp = ({ coords: { x, y } }) => {
      return (
        <div>
          X={x} Y={y}
        </div>
      );
    };
    const Comp = withMousePosition(MockedWrappedComp);
    render(<Comp />);
    expect(screen.getByText("X=0 Y=0")).toBeTruthy();
    // expect(screen.getByText("cat").style.left).toEqual("75px");
  });
});
