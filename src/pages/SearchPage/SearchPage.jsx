import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, GridList } from '@material-ui/core';
import { createAction } from './../../redux/actions'
import { fetchSearchMovie } from '../../redux/actions/movieListAction';
import { CLEAR_SEARCHKEY } from '../../constants/constant';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SearchPage.scss'
import SearchItem from './../../components/SearchItem/SearchItem'

const SearchPage = (props) => {
  const dispatch = useDispatch();
  const {movieSearchList} = props;
  useEffect(() => {
    dispatch(fetchSearchMovie(props.match.params.tenPhim));
    return () => {
      dispatch(createAction(CLEAR_SEARCHKEY))
    }
  }, [dispatch, props]);

  const renderMovieSearch = () => {
    if (movieSearchList.length) {
      return props.movieSearchList.map((item, index) => {
        return (
          <Grid
            key={index}
          >
            <SearchItem item={item} />
          </Grid>
        )
      })
    } else {
      return (
        <div
          style={{ width: '1000px' }}
        >
          <p className='error'>
            Search No Result
          </p>
          <p className='error' >
            We're sorry. We cannot find any matches for your search term.
          </p>
          <SearchIcon style={{ fontSize: '40px' }} />
        </div>
      )
    }
  }

  return (
    <div >
      <p style={{ fontSize: '20px' }}>
        Result found for{' '}
        <span className='text-danger'>{`"${props.match.params.tenPhim}"`}</span>
      </p>
      <div >
        <GridList
          cellHeight={400}
          className='test'
          cols={6}
          container='true'
          style={{ margin: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {renderMovieSearch()}
        </GridList>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    movieSearchList: state.movieList.initialMovieSearch,
  };
};

SearchPage.propTypes = {
  match: PropTypes.object,
  movieSearchList: PropTypes.array,
  params: PropTypes.object,
}

export default connect(mapStateToProps)(SearchPage); 