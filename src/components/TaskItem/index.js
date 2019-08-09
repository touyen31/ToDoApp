import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './styles';


class TaskItem extends Component {
  render() {
    const { classes, item } = this.props;
    return (
      <Card key={item.id} className={classes.container}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{item.title}</Typography>
            </Grid>
          </Grid>
          <p>{item.description}</p>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Fab color="primary" aria-label="edit" size="small" className={classes.Fab}>
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="primary" aria-label="edit" size="small" className={classes.Fab}>
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>);
  }
}
export default withStyles(styles)(TaskItem);
