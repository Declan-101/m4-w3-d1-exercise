import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = shallow(<MyComponent />);
    expect(component.find('input')).toHaveLength(1);
  });

  it('should match the expected UI snapshot', () => {
    const component = shallow(<MyComponent />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it('should create an entry in component state', () => {
    const component = shallow(<MyComponent />);
    component.find('input').props().onChange({
      target: { name: 'myName', value: 'myValue' },
    });
    expect(component.state('input')).toBeDefined();
  });

  it('should create an entry in component state with the event value', () => {
    const component = shallow(<MyComponent />);
    component.find('input').props().onChange({
      target: { name: 'myName', value: 'myValue' },
    });
    expect(component.state('input')).toEqual('myValue');
    expect(component.find('input').prop('value')).toEqual('myValue');
  });

  it('updates and clears the input when the user types again', () => {
    const component = shallow(<MyComponent />);
    for (const value of ['first', 'second', '']) {
      component.find('input').simulate('change', { target: { value } });
      expect(component.state('input')).toEqual(value);
      expect(component.find('input').prop('value')).toEqual(value);
    }
  });
});
