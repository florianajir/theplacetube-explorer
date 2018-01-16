import React from 'react';
import './Player.css';
import PropTypes from 'prop-types';
import YoutubeEmbed from './YoutubeEmbed';

const Player = ({onClose, video}) => {
  if (video === null) {
    return;
  }

  return (
      <div className="Player">
        <button
            onClick={e => {
              e.preventDefault();
              onClose();
            }}
        >
          &times;
        </button>
        <YoutubeEmbed id={video.id}/>
        <div className="Meta">
          <div className="player-title">{video.title}</div>
          <div className="player-viewCounts">{video.viewCount}</div>
          <div className="player-date">{video.date}</div>
          <div className="player-description">{video.description}</div>
          <div className="player-tags">{video.tags}</div>
        </div>
      </div>
  );
};

Player.propTypes = {
  onClose: PropTypes.func.isRequired,
  video: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    tags: PropTypes.array,
    title: PropTypes.string.isRequired,
    viewCount: PropTypes.number.isRequired
  })
};

export default Player;
