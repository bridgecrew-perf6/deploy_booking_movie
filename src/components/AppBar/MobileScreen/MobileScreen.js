import React from 'react';
import { IconButton, Toolbar, Typography, Drawer } from '@material-ui/core'; 
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from '../useStyles';
import LinkMenu from '../LinkMenu/LinkMenu';
import IconUser from '../IconUser/IconUser';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const MobileScreen = ({drawerOpen, setState}) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  const handleDrawerOpen=()=>{
    setState((prevState)=> ({...prevState, drawerOpen: true}));
  }
  const handleDrawerClose= ()=>{
    setState((prevState)=> ({...prevState, drawerOpen: false}));
  }
  
  return (
    <Toolbar className={classes.toolBar}>
      <IconButton
        aria-haspopup= 'true'
        aria-label='menu'
        className={classes.menuButton}
        color='inherit'
        edge='start'
        onClick= {handleDrawerOpen} 
      >
        {
          matches ? <MenuIcon style={{fontSize: '36px'}}/> : (
            <span className={classes.brand}>Cinnema <span className={classes.plusIcon}><AddIcon fontSize='inherit'/></span></span>
          )
        }
      </IconButton>
           
      <Drawer
        {...{
          anchor: 'left',
          open: drawerOpen,
          onClose: handleDrawerClose,  
          width:'10px'
        }}
      >
        <Typography
          className={classes.menuLinkss} 
          variant='h6'
        >
          <div className={classes.linkss}>
            <LinkMenu />
          </div>
        </Typography> 
      </Drawer>
      <IconUser />
    </Toolbar>  
  )
}

MobileScreen.propTypes = {
  drawerOpen: PropTypes.bool,
  setState: PropTypes.func,
}

export default MobileScreen
