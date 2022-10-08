import React from "react";
import SimpleStateful from "./index";
import { shallow } from "enzyme";

describe("SimpleStateful", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SimpleStateful />);
  });

  it("should get rendered", () => {
    expect(wrapper.text()).toContain("0");
  });

  it("should get incremented on button click", () => {
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(wrapper.text()).toContain("1");
  });

  it("should get incremented on button click", () => {
    const button = wrapper.find("button").at(1);
    button.simulate("click");
    expect(wrapper.text()).toContain("-1");
  });
});
