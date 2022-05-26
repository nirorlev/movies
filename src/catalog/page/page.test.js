import React from 'react';
import { shallow } from 'enzyme';
import Page from '.';

describe("Task 1: Catalog tests", () => {
  it("should expect rendering", () => {
    const component = shallow(<Page />);
    
    expect(component.exists()).toBeTruthy();
    expect(component.find("Catalog")).not.toBeNull();
  })
})
