import React from 'react';
import ReactDOM from 'react-dom';
import Map from './GoogleMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Map />, div);
});
