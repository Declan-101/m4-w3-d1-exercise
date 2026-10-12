import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MyComponent from './components/MyComponent';

it('renders MyComponent in App', () => {
  expect(shallow(<App />).find(MyComponent)).toHaveLength(1);
});
