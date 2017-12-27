import React, {Component} from 'react';
import './Explorer.css';
import Grid from 'material-ui/Grid';
import Map from '../components/Map';
import Player from './Player';
import Sidebar from './Sidebar';

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        order: 'viewCount',
        q: '',
        videoCategoryId: ''
      },
      location: {
        coords: {
          latitude: this.props.latitude,
          longitude: this.props.longitude
        },
        radius: this.props.radius
      },
      play: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleMapMove = this.handleMapMove.bind(this);
    this.handleRadiusChange = this.handleRadiusChange.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handlePlay(video) {
    this.setState({
      play: video
    });
  }

  handleStop() {
    this.play(false);
  }

  handleSearchChange(search) {
    this.setState({
      search: search
    });
  }

  handleMapMove(latitude, longitude) {
    this.setState({
      location: {
        coords: {
          latitude: latitude,
          longitude: longitude
        }
      }
    });
  }

  handleRadiusChange(radius) {
    this.setState({
      location: {
        radius: radius
      }
    });
  }

  render() {
    return (
          <main className="Explorer">
            <Grid container spacing={24}>
              <Grid item className="left-panel" xs={12} sm={6} md={7} xl={8}>
                <Map coords={this.state.location.coords} radius={this.state.location.radius} onMapMove={this.handleMapMove} onZoomChange={this.handleRadiusChange}/>
                <Player video={this.state.play} onStop={this.handleStop}/>
              </Grid>
              <Grid item className="right-panel" xs={12} sm={6} md={5} xl={4}>
                <Sidebar results={this.props.results} onSearchChange={this.handleSearchChange} onPlay={this.handlePlay}/>
              </Grid>
            </Grid>
          </main>
    );
  }
}

export default Explorer;
