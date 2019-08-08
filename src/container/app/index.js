import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import styles from './style'


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider>
        <p>todo list</p>
      </ThemeProvider>
    );
  }
}


export default withStyles(styles)(App);
