import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Article Manager
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/saved">Saved Articles</Button>
        <Button color="inherit" component={Link} to="/recommendations">Recommendations</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
