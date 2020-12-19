import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './useStyles';
import PropTypes from 'prop-types';

const ButtonComponent = (props) => {
  const classes = useStyles();
  const { type = 'submit', children = 'NOT-FOUND' } = props;
  return (
    <div>
      <Button
        className={classes.submit}
        color='primary'
        fullWidth
        type={type}
        variant='contained'
      >
        <b>{children}</b>
      </Button>
    </div>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};

export default ButtonComponent;
