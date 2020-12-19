import React from 'react';
import { AppBar as App, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from '../useStyles';
import IconUser from '../IconUser/IconUser';
import LinkMenu from '../LinkMenu/LinkMenu';
import SearchBar from '../../SearchBar/SearchBar'
const DesktopScreen = () => {
  const movieList = useSelector(state => state.movieList.initialMovieList);
  const classes = useStyles();
  return (
    <App
      className={classes.app}
      position='static'
    >
      <Toolbar className={classes.toolBar}>
        <IconButton
          aria-label='menu'
          className={classes.menuButton}
          color='inherit'
          edge='start'
        >
          <span className={classes.brand}>Cinnema <span className={classes.plusIcon}><AddIcon fontSize='inherit' /></span></span>
        </IconButton>
        <SearchBar movieList={movieList} />
        <Typography
          className={classes.menuLinks}
          variant='h6'
        >
          <Grid className={classes.links}>
            <LinkMenu />
          </Grid>
          <IconUser />
        </Typography>
      </Toolbar>
    </App>

  )
}

export default DesktopScreen
