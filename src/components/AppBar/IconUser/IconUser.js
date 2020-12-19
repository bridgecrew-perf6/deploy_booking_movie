import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, CardMedia, Grid, Menu, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdminIcon from '../../../assets/images/admin.svg';
import RegisterIcon from '../../../assets/images/register.svg';
import LoginIcon from '../../../assets/images/login.svg';

import { 
  ADMIN_PAGE, 
  LOGIN_PAGE, 
  PROFILE_PAGE, 
  REGISTER_PAGE,
  ORDER_CART_PAGE,
  LOCAL_STORAGE_BOOKING_STATUS_KEY,
  HOME_PAGE,
} from '../../../constants/constant';

import { StyleButton, StyledMenuItem } from '../useStyles'
import {useStyles} from './useStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromLocalStorage } from '../../../utils/LocalStorage/LocalStorage';
import { toast } from 'react-toastify';
import { clearStoreAction } from '../../../redux/actions/userAction';
import { inforUserAction } from '../../../redux/actions/profileAction';

const IconUser=()=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();


  const [anchorEl, setAnchorEl] = useState(null);
  const userCredentials = useSelector(state => state.user.credentials);
  const loginStatus = useSelector(state => state.user.loginStatus);
  const getBookingStatus = getDataFromLocalStorage(LOCAL_STORAGE_BOOKING_STATUS_KEY) 

  const bookingStatus = JSON.parse(getBookingStatus);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // handle logout
  const handleLogOutBtnClick = (e) => {
    e.preventDefault();

    const notify_success = () => {
      toast.success('Logout success');
    };

    dispatch(clearStoreAction(notify_success));
    history.push(HOME_PAGE);
  }

  const handleProfileClick = () => {
    dispatch(inforUserAction(userCredentials));
  }

  useEffect(() => {
    if(loginStatus === true){
      dispatch(inforUserAction(userCredentials));
    }
  }, [userCredentials, dispatch, loginStatus]);

  const accountName = (name) => {
    if(name.length > 4){
      return `${name.slice(0, 4)}...`;
    }
    return;
  }

  return(
    <div style={{position:'absolute', right:'0px'}}>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <span className={classes.userIcon}>
          <AccountCircleIcon
            fontSize='large'
            htmlColor='#fff'
          /></span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        id='simple-menu'
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        {
          userCredentials
            ? (<div>
              <StyledMenuItem onClick={handleClose}>
                <Link
                  className='user link-user hover-link'
                  to={PROFILE_PAGE}
                >
                  <Grid className='menu-item'>
                    <PersonIcon className='icon-item'/>
                    <Typography
                      className='text-item'
                      component={'span'}
                    >
                      Hi,  {accountName(userCredentials.taiKhoan)}
                    </Typography>
                  </Grid>
                </Link>
              </StyledMenuItem>
              {
                bookingStatus === 200 ? (
                  <StyledMenuItem onClick={handleClose}>
                    <Link
                      className='user link-user hover-link'
                      to={ORDER_CART_PAGE}
                    >
                      <Grid className='menu-item'>
                        <ShoppingCartIcon className='icon-item'/>
                        <Typography
                          className='text-item'
                          component={'span'}
                        >
                    Your order
                        </Typography>
                      </Grid>
                    </Link>
                  </StyledMenuItem>
                ) : null
              }
              {
                userCredentials.maLoaiNguoiDung === 'KhachHang' 
                  ? null
                  : (
                    <StyledMenuItem onClick={handleClose}>
                      <Link
                        className='user link-user hover-link'
                        onClick={handleProfileClick}
                        to={ADMIN_PAGE}
                      >
                        <Grid className='menu-item'>
                          <Grid className='icon-item admin-item'>
                            <CardMedia 
                              alt='admin'
                              className='admin-icon'
                              image={AdminIcon}
                            />
                          </Grid>
                          <Typography
                            className='text-item'
                            component={'span'}
                          >
                          Admin
                          </Typography>
                        </Grid>
                      </Link>
                    </StyledMenuItem>
                  )
              }
              <StyledMenuItem onClick={handleClose}>
                <StyleButton
                  className='logout hover-btn'
                  onClick={handleLogOutBtnClick}
                >
                  <Grid className='menu-item'>
                    <ExitToAppIcon className='icon-item'/>
                    <Typography
                      className='text-item logout-item'
                      component={'span'}
                    >
                    Logout
                    </Typography>
                  </Grid>
                </StyleButton>
              </StyledMenuItem>
            </div>
            ) 
            : (<div>
              <StyledMenuItem onClick={handleClose}>
                <Link
                  className='link hover-link auth'
                  to={LOGIN_PAGE}
                >
                  <Grid className='menu-item'>
                    <Grid className='icon-item admin-item'>
                      <CardMedia 
                        alt='admin'
                        className='admin-icon'
                        image={LoginIcon}
                      />
                    </Grid>
                    <Typography
                      className='text-item'
                      component={'span'}
                    >
                    Login
                    </Typography>
                  </Grid>
                </Link></StyledMenuItem>

              <StyledMenuItem onClick={handleClose}>
                <Link
                  className='link hover-link auth'
                  to={REGISTER_PAGE}
                >
                  <Grid className='menu-item'>
                    <Grid className='icon-item admin-item'>
                      <CardMedia 
                        alt='admin'
                        className='admin-icon'
                        image={RegisterIcon}
                      />
                    </Grid>
                    <Typography
                      className='text-item'
                      component={'span'}
                    >
                    Register
                    </Typography>
                  </Grid>
                </Link></StyledMenuItem>
            </div>
            )
        }
      </Menu>
    </div>
  )
}

IconUser.propTypes = {
  accountName: PropTypes.func,
  anchorEl: PropTypes.func,
  bookingStatus: PropTypes.number,
  handleClick: PropTypes.func,
  handleClose: PropTypes.func,
  handleLogOutBtnClick: PropTypes.func,
  handleProfileClick: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  userCredentials: PropTypes.object,
}


export default IconUser
