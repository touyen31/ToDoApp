import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default class UIButton extends Component {
  render() {
    const { title, handleClick } = this.props;
    return (
      <Button variant="contained" color="secondary" onClick={handleClick}>
        <AddIcon /> {title}
      </Button>
    );
  }
}
