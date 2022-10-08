import React, { useState, useEffect } from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import useMousePosition from "../useMousePosition";
import { renderHook } from "@testing-library/react-hooks";

const mockedsetCoord = jest.fn((state) => state);

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

describe("test useMousePosition", () => {
  test("should render correctly", () => {
    // const { result } = renderHook(() => useMousePosition());
    // expect(result.current.x).toEqual(0);
    // expect(result.current.y).toEqual(0);
    React.useState.mockImplementation((state) => [state, mockedsetCoord]);
    React.useEffect.mockImplementationOnce((f) => f());
    useMousePosition();
  });
});
