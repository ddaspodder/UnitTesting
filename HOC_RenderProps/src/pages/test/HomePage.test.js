import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Home from "../Home";
import { ThemeContext, defaultTheme } from "../../Theme";

const mockedChangedTheme = jest.fn();
const value = {
  theme: defaultTheme.theme,
  changeTheme: mockedChangedTheme,
};

describe("Test Home Page", () => {
  it("should render correctly", () => {
    //when no provider default context value is taken
    render(<Home />);
    expect(screen.getByText("Home")).toHaveStyle("color: rgb(0,0,0);");
  });

  it("should change theme on click of button", async () => {
    render(
      <ThemeContext.Provider value={value}>
        <Home />
      </ThemeContext.Provider>
    );
    fireEvent.click(screen.getByText("Change Theme"));
    expect(mockedChangedTheme).toHaveBeenCalled();
  });
});
