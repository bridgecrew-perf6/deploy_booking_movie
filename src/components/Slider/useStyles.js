import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  text: { 
    textAlign:'left', 
    letterSpacing:'2.5px',
    '@media (max-width: 996px)': {
      margin: '80px 0 20px 0'
    }
  },
}));