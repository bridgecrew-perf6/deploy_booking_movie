import { Button, MenuItem } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const StyledMenuItem = withStyles({
  root: {
    height: '50px',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
})(MenuItem);

export const StyleButton = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover::after': {
      backgroundColor: 'transparent',
    },
  },
})(Button);

export const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: '#1b1b1b',
  },
  brand: {
    fontSize: 30,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400
  },
  userIcon:{
    paddingTop: 6
  },
  menuLinks: {
    flexGrow: 1,
    display: 'flex', 
    textDecoration: 'none',
  },
  linkss:{ 
    display: 'flex', 
    flexDirection: 'column',  
    width: 300,
    margin: 'auto', 
    textDecoration: 'none',
    alignItems:'center',
  },
  links: {
    width: 700,
    margin: 'auto',
    display: 'flex',
    textDecoration: 'none'
  } 
}));

