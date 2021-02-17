import React from "react";
import { shallow } from "enzyme";
import UncachedLoading from "./UncachedLoading";

test("renders the UncachedLoading component", () => {
  const component = shallow(<UncachedLoading />);
  expect(component.length).toBe(1);
});
