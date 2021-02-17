import React from "react";
import { shallow } from "enzyme";
import InitialLoading from "./InitialLoading";

test("renders the InitialLoading component", () => {
  const component = shallow(<InitialLoading />);
  expect(component.length).toBe(1);
});
