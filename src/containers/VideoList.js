import React, {Component} from 'react';
import './VideoList.css';
import VideoLink from '../components/VideoLink';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos ? props.videos : []
    };
  }

  render() {
    return (
        <div className="VideoList">
          <ul>
            {this.state.videos.map(function(video) {
              return <VideoLink data={video}/>;
            })}
          </ul>
        </div>
    );
  }
}

export default VideoList;
