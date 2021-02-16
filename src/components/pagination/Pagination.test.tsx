import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../testUtils";

import Pagination from "./Pagination";

export const setup = (props = {}) => {
  const wrapper = shallow(
    <Pagination currentPage={1} totalBackendCards={246} {...props} />
  );
  return wrapper;
};

describe("Pagination Component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-pagination");
    expect(component.length).toBe(1);
  });

  it("renders next button", () => {
    const wrapper = setup({ currentPage: 1, totalFetchedPages: 20 });
    const nextButton = findByTestAttr(wrapper, "next-button");
    expect(nextButton.length).toBe(1);
  });

  it("hides back button", () => {
    const wrapper = setup({ currentPage: 1, totalFetchedPages: 20 });
    const backButton = findByTestAttr(wrapper, "back-button");
    expect(backButton.length).toBe(0);
  });

  it("renders current page index", () => {
    const wrapper = setup({ currentPage: 1 });
    const currentPageIndex = findByTestAttr(wrapper, "currentPageIndex");
    expect(currentPageIndex.text()).toContain(1);
  });
});
