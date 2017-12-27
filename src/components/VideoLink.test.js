import React from 'react';
import ReactDOM from 'react-dom';
import VideoLink from './VideoLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoLink/>, div);
});
