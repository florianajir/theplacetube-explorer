import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './VideoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoList videos={[]} />, div);
});
