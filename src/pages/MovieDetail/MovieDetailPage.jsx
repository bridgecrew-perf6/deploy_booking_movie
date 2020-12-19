import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@material-ui/core';
import { fetchMovieDetail } from '../../redux/actions/movieListAction';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { CLEAR_DETAIL_MOVIE } from '../../constants/constant';
import { createAction } from '../../redux/actions';
import ModalPopup from './Modal/Modal.js';
import PropTypes from 'prop-types';
import './MovieDetail.scss'
import CustomScheduleMovie from '../../components/DetailMovie/CustomScheduleMovie/CustomScheduleMovie';

const MovieDetailPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetail(props.match.params.maPhimId));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props]);



  const movieList = useSelector((state) => {
    return state.movieList.initaialMovieList_Detail
  });

  const renderMovieList = () => {
    const { danhGia,
      hinhAnh,
      biDanh,
      // maNhom, 
      maPhim,
      moTa,
      ngayKhoiChieu,
      tenPhim,
      lichChieu,
      trailer,
    } = movieList;

    let newArray = [];
    // Declare an empty object 
    let uniqueObject = {};

    // Loop for the array elements 
    for (let i in lichChieu) {

      // Extract the title 
      let objTitle = lichChieu[i]['maRap'];

      // Use the title as the index 
      uniqueObject[objTitle] = lichChieu[i];
    }

    // Loop to push unique object into array 
    for (let i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }

    const yo = [];
    for (let i in newArray) {
      // console.log(newArray[i]);
      yo.push(newArray[i].thongTinRap);
    }
    return (
      <Container className='main'>
        <Grid
          container
        >
          {/* Poster&NameMovie */}
          <Grid
            item
            sm={3}
            xs={12}
          >
            <Grid
              container
            >
              <Grid
                item
                sm={6}
                xs={12}
              >
                <Typography
                  className='title'
                  component='h4'
                  variant='h4'
                >
                  {tenPhim}
                </Typography>
              </Grid>
              <Grid
                item
                sm={6}
                xs={12}
              >
                <Typography
                  className='title'
                  component='h4'
                  variant='h4'
                >
                  {maPhim}
                </Typography>
              </Grid>
              <img
                alt='hinhAnh'
                className='image'
                src={hinhAnh}
              />
            </Grid>
          </Grid>
          {/* Schedule */}
          <Grid
            className='title-detail'
            item
            sm={9}
            xs={12}
          >
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              {biDanh}
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              {moTa}
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              Đánh giá: {danhGia} *
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              Ngày khởi chiếu: {ngayKhoiChieu}
            </Typography>
            <Grid
              container
            >
              <ModalPopup trailer={trailer} />

            </Grid>
          </Grid>
        </Grid>
        <CustomScheduleMovie
          arrayData={newArray}
          className='schedule-movie'
        />
      </Container>

    )
  }

  return (
    <div>
      {
        movieList ? renderMovieList() : <LoadingCool />
      }
    </div>
  )
}

MovieDetailPage.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
}
export default MovieDetailPage;

