import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './styles';
import UIButton from '../../components/UIButton';
import { STATUSES } from '../../constans';

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
    description: 'description 2',
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
  renderTask = (status) => {
    return (
      <div>
        {
          listTask
            .filter((item) => item.status === status)
            .map((item) =>
              <Card key={item.id}>
                <CardContent>
                  <Grid container justify="space-between">
                    <Grid item md={8}>
                      <Typography component="h2">{item.title}</Typography>
                    </Grid>
                  </Grid>

                </CardContent>
              </Card>)
        }
      </div>
    )
  }
  renderBoard = () => {
    return (
      <Grid container spacing={5}>
        {
          STATUSES.map(({ value, label }) =>
            <Grid item md={4} xs={12} key={value}>
              <Box mt={2} mb={2}>
                <div>{label}</div>
              </Box>
              {this.renderTask(value)}
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
