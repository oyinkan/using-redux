import React from 'react';
import { Route, Link } from 'react-router-dom';
import SingleUser from "./SingleUser";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  item: {
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const UsersList = ({users}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row">
        {users.map(user => 
          <Grid item xs={12} sm={4} key={user.id}>
            <Card variant="outlined" className={classes.item}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {user.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {user.email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link to={`users/${user.id}`}>Learn More</Link></Button>
              </CardActions>  
            </Card>
          </Grid>
        )}
      
      </Grid>

      <Route path={`/users/:userId`} component={SingleUser} /> 
    </div>
  );
};

export default UsersList;