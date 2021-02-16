import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../testUtils";

import CardGrid from "./CardGrid";

export const setup = (props = {}) => {
  const wrapper = shallow(<CardGrid {...props} />);
  return wrapper;
};

describe("CardGrid component", () => {
  it("renders card grid without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "CardGrid-Display");
    expect(component.length).toBe(1);
  });
});
