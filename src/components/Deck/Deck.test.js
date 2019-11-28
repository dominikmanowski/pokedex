import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './Deck';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Deck />, div);
  ReactDOM.unmountComponentAtNode(div);
});