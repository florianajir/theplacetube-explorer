import React from 'react';
import '../components/Explorer.css';
import Grid from 'material-ui/Grid';
// import Player from '../components/Player';
import Sidebar from '../components/Sidebar';
import Map from '../containers/map/map.container';

const Explorer = ({onPlay, onSearchChange, results}) => (
    <main className="Explorer">
      <Grid container spacing={24}>
        <Grid item className="left-panel" xs={12} sm={6} md={7} xl={8}>
          <Map/>
          {/*<Player/>*/}
        </Grid>
        <Grid item className="right-panel" xs={12} sm={6} md={5} xl={4}>
          <Sidebar/>
        </Grid>
      </Grid>
    </main>
);

export default Explorer;
