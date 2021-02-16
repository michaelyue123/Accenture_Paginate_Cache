import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../testUtils";

// App component test
const setup = (props = {}) => {
  const wrapper = shallow(<App {...props} />);
  return wrapper;
};

describe("App component", () => {
  it("Should render without errors", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "main-component");
    expect(component.length).toBe(1);
  });
});
