import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, listTask, status } = this.props;
    return (
      <div>
        {
          listTask
            .filter((item) => item.status === status)
            .map((item) => <TaskItem item={item} key={item.id} />
            )
        }
      </div>
    );
  }
}
export default withStyles(styles)(TaskList);