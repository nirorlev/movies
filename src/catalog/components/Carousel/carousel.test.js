import React, { useState } from "react";
import { shallow } from "enzyme";
import Carousel from ".";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Task 1: Catalog tests > Carousel", () => {
  const setState = jest.fn();

  beforeEach(() => {
    useState.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should carousel be clicked", () => {
    shallow(<Carousel />)
      .find(".carrossel__button")
      .simulate("click");
    
    expect(setState).toHaveBeenCalled();
  });
});
