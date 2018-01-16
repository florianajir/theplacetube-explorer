import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeEmbed from './YoutubeEmbed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YoutubeEmbed id="1" />, div);
});
