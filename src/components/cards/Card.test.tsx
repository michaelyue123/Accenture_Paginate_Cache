import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../testUtils";
import SingleCard from "./Card";

export const setup = (props = {}) => {
  const wrapper = shallow(<SingleCard {...props} />);
  return wrapper;
};

describe("Pagination Component", () => {
  const wrapper = setup();
  it("renders card drawer without error", () => {
    const component = findByTestAttr(wrapper, "CardDrawer-Display");
    expect(component.length).toBe(1);
  });

  it("renders single card summary without error", () => {
    const component = findByTestAttr(wrapper, "CardSummary-Display");
    expect(component.length).toBe(1);
  });
});
