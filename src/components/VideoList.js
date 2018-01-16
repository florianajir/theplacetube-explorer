import React from 'react';
import './VideoList.css';
import PropTypes from 'prop-types';
import VideoLink from './VideoLink';

const VideoList = ({videos}) => (
    <div className="VideoList">
      <ul>
        {videos.map(function(video) {
          return <VideoLink data={video}/>;
        })}
      </ul>
    </div>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
