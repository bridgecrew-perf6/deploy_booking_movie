// fetch data
import { toast } from 'react-toastify';
import { createAction } from '.';
import {
  FETCH_MOVIELIST,
  FETCH_MOVIE_DETAIL,
  KEYSEARCH,
} from '../../constants/constant';
import {
  MovieDetailService,
  MovieListService,
  MovieSearchService,
} from '../../services/movielist';
//CLEAR_SEARCHKEY
export const fetchMovieList = () => {
  return (dispatch) => {
    MovieListService()
      .then((res) => {
        dispatch(createAction(FETCH_MOVIELIST, res.data));
      })
      .catch((err) => {
        toast.error('Error: ', err);
      });
  };
};

export const fetchMovieDetail = (maPhim) => {
  return (dispatch) => {
    MovieDetailService(maPhim)
      .then((res) => {
        dispatch(createAction(FETCH_MOVIE_DETAIL, res.data));
      })
      .catch((err) => {
        toast.error('Error: ', err);
      });
  };
};

export const fetchSearchMovie = (keySearch) => {
  return (dispatch) => {
    MovieSearchService(keySearch)
      .then((res) => {
        dispatch(createAction(KEYSEARCH, res.data));
      })
      .catch((err) => {
        toast.error('Error: ', err);
      });
  };
};
