import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe(`Header Component`, () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it(`Renders children text`, () => {
    const { getByText } = render(<Header title="Hello" />);
    getByText('Hello');
  });
});
