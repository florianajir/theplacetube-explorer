import React from 'react';
import ReactDOM from 'react-dom';
import Explorer from './Sidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Explorer />, div);
});
