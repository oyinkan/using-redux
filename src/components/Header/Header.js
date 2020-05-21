import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
	      <Typography variant="h6" className={classes.title}>
	        Users Nav
	      </Typography>
	      <Button className={classes.root}><Link to="/" style={{color: 'white'}}>Home</Link></Button>
	      <Button className={classes.root}><Link to="/users" style={{color: 'white'}}>Users</Link></Button>
	  </Toolbar>
    </AppBar>
  );
};

export default Header;