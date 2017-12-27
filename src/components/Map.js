import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleMapMove = this.handleMapMove.bind(this);
    this.handleZoomChange = this.handleZoomChange.bind(this);
  }

  handleMapMove(latitude, longitude) {
    this.props.onMapMove(latitude, longitude);
  }

  handleZoomChange() {
    let radius = 1000;
    this.props.onZoomChange(radius);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  initMap() {

  }

  render() {
    return (
        <div className="Map">

        </div>
    );
  }
}

export default Map;
