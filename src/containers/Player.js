import React, {Component} from 'react';
import './Player.css';
import Youtube from '../components/YoutubeEmbed';
import Meta from '../components/Meta';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: props.video
    };
  }

  handleStop() {
    this.props.onStop();
  }

  render() {
    if (this.state.video === false) {
      return null;
    }
    return (
        <div className="Player">
          <button onClick={this.handleStop}>&times;</button>
          <Youtube id={this.state.video}/>
          <Meta video={this.state.video}/>
        </div>
    );
  }
}

export default Player;
