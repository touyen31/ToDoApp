import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';
import UIButton from '../../components/UIButton';
import { STATUSES } from '../../constans';
import TaskList from '../../components/TaskList';

const listTask = [
  {
    id: 1,
    title: 'title 1',
    description: 'description 1',
    status: 0
  },
  {
    id: 2,
    title: 'title 2',
    description: '',
    status: 2
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description 3',
    status: 1
  }
]
class TaskBoard extends Component {
  renderBoard = () => {
    return (
      <Grid container spacing={5}>
        {
          STATUSES.map(({ value, label }) =>
            <Grid item md={4} xs={12} key={value}>
              <Box mt={2} mb={2}>
                <div>{label}</div>
              </Box>
              <TaskList listTask={listTask} status={value} key={value} />
            </Grid>)
        }
      </Grid>
    )
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <UIButton title={'Thêm mới công việc'} />
        {this.renderBoard()}
      </div>
    )
  }
}
export default withStyles(styles)(TaskBoard);
