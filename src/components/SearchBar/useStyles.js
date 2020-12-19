import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  search: {
    width: '300px',

    '& .MuiFormControl-marginNormal':{
      marginTop: '0',
      marginBottom: '0'
    }

  },
  textField: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc'
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },
    '& .MuiOutlinedInput-input': {
      color: '#ccc',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: '#fff',
    },
    '& .MuiInputLabel-outlined': {
      color: '#ccc',
      transform: 'translate(10px, 12px) scale(1)',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(16px, -6px) scale(0.75)'
    },
    '&:hover .MuiInputLabel-outlined': {
      color: '#fff',
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: '0'
    },
  }
});