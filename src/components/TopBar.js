import React from 'react';
import './TopBar.css';
import Brand from './Brand';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const TopBar = () => (
    <div className="TopBar">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menu-button" color="contrast" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography className="flex" type="title" color="inherit">
            <Brand/>
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
);

export default TopBar;
