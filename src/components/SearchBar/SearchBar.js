import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useStyles } from './useStyles';
import './SearchBar.scss';

const SearchBar = ({ movieList }) => {
  const classes = useStyles();
  const history = useHistory();

  const nameMovie = movieList.map((item) => item.tenPhim);

  const [value, setValue] = useState(nameMovie[0]);
  //handle submit
  const handleSubmitSearch = (newValue) => {
    history.push('/searchMovie/' + newValue)
  }
  return (
    <Autocomplete
      className={classes.search}
      disableClearable
      freeSolo
      id='search-bar'
      onChange={(e, newValue) => {
        setValue(newValue);
        handleSubmitSearch(newValue)
      }}
      options={movieList.map((movie) => movie.tenPhim)}
      renderInput={(params) => (
        <TextField
          className={classes.textField}
          {...params}
          InputProps={{ ...params.InputProps, type: 'search' }}
          label='Search movie...'
          margin='normal'
          variant='outlined'
        />
      )}
      value={value}
    />
  )
}

SearchBar.propTypes = {
  movieList: PropTypes.array,
}


export default SearchBar
