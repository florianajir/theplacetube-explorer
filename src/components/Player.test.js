import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Player video={{"id":"foo"}} onClose={console.log('close')}/>, div);
});
