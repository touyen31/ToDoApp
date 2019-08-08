import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'

class TaskBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <div className={classes.shape}>abc</div>
        <div className={classes.shape}>abcdef</div>
      </div>
    )
  }
}
export default withStyles(styles)(TaskBoard);
