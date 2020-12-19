import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { AppBar as App } from '@material-ui/core';

import { inforUserAction } from '../../redux/actions/profileAction';
import DesktopScreen from './DesktopScreen/DesktopScreen';
import MobileScreen from './MobileScreen/MobileScreen';
import { useStyles } from './useStyles';
import './AppBar.scss';

const AppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    mobieView: false,
    drawerOpen: false,
    keySearch: '',
  });

  const { mobieView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ?
        setState((prevState) => ({ ...prevState, mobieView: true }))
        : setState((prevState) => ({ ...prevState, mobieView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

  }, []);

  const userCredentials = useSelector(state => state.user.credentials);
  const loginStatus = useSelector(state => state.user.loginStatus);

  useEffect(() => {
    if (loginStatus === true) {
      dispatch(inforUserAction(userCredentials));
    }
  }, [userCredentials, dispatch, loginStatus]);

  return (
    <div>
      <App
        className={classes.app}
        position='static'
      >
        {mobieView ?
          <MobileScreen
            drawerOpen={drawerOpen}
            setState={setState}
          /> : <DesktopScreen />}
      </App>
    </div>
  )
}

AppBar.propTypes = {
  anchorEl: PropTypes.func,
  handleClick: PropTypes.func,
  handleClose: PropTypes.func,
  handleLogOutBtnClick: PropTypes.func,
  handleProfileClick: PropTypes.func,
  loginStatus: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  userCredentials: PropTypes.object,
}

export default AppBar


