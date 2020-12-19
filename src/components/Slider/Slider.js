import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Slider from 'react-slick'; 
import {Grid, Typography} from '@material-ui/core' 
import SliderItems from './SliderItems/SliderItems';
import {useStyles} from './useStyles'
import PropTypes from 'prop-types'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'; 
import { fetchMovieList } from '../../redux/actions/movieListAction';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SliderSlick=()=> {
  const classes= useStyles();
  const matches = useMediaQuery('(max-width:768px)');
  
  const dispatch= useDispatch();

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const config1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [settings] = useState(config);
  const [settings1] = useState(config1);


  useEffect(()=>{
    dispatch(fetchMovieList());
  },[dispatch]);
  
  const movieList = useSelector((state) => {
    return state.movieList.initialMovieList;
  });
 
  const renderSilerList=()=>{
    return movieList.map((item, index)=>{
      return (
        <SliderItems
          item= {item}
          key={index}
        />
      )
    })
  }

  return (
    <Grid className='slick'>
      <Typography
        className={classes.text}
        component='h2'
        variant='h4'
      >Now Showing</Typography>
      {
        matches ? (
          <Slider {...settings1}>
            {
              renderSilerList()
            } 
          </Slider>
        ) : (
          <Slider {...settings}>
            {
              renderSilerList()
            } 
          </Slider>
        )
      }
    </Grid>
  );
}
SliderSlick.propTypes={
  SliderItems: PropTypes.object,
}
export default SliderSlick;
