import React from 'react'
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia
} from '@material-ui/core';
import PropTypes from 'prop-types';
const SearchItem = ({ item }) => {
  const { tenPhim, hinhAnh } = item;
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          alt='movie_Image1'
          className='img1'
          image={hinhAnh}
          style={{ width: '200px', height: '300px' }}
        />
        <Typography
          className='card-title1'
          component='h2'
          gutterBottom
          style={{ color: '#ffffff' }}
          variant='h5'
        >
          {tenPhim}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

SearchItem.propTypes = {
  item: PropTypes.object,
};

export default SearchItem;
