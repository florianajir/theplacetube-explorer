import React from 'react';
import './GoogleMap.css';
import {Grid} from 'material-ui';
import PropTypes from 'prop-types';

const GoogleMap = ({location, viewport, onMapMove, onZoomChange, radius}) => (
    <Grid container>
      <Grid item xs={12}>
        <div id="map"/>
      </Grid>
    </Grid>
);

GoogleMap.propTypes = {
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired,
  viewport: PropTypes.object.isRequired,
  onMapMove: PropTypes.func.isRequired,
  onZoomChange: PropTypes.func.isRequired,
  radius: PropTypes.number.isRequired
};

export default GoogleMap;
