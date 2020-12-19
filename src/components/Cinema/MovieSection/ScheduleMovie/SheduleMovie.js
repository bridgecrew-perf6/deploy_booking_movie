import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Grid } from '@material-ui/core';

import './ScheduleMovie.scss';
import { CONTACT_PAGE } from '../../../../constants/constant';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const ScheduleMovie = ({movieSchedules}) => {
  const matches = useMediaQuery('(max-width:996px)');
  const schedules = movieSchedules.slice(0,5);
  const schedules1 = movieSchedules.slice(0,3);

  return (
    <div>
      {
        matches ? (
          schedules1.map((item, index) => {
            const {ngayChieuGioChieu, tenRap} = item;
        
            return (
              <Button
                className='schedule-item'
                key={index}
              >
                <Grid className='cinema-name'>
                  {tenRap}
                </Grid>
                <Divider className='devide'/>
                <Grid
                  className='schedule-detail'
                  to={CONTACT_PAGE}
                >
                  {ngayChieuGioChieu}
                </Grid>
              </Button>
            ) 
          })
        ) : (
          schedules.map((item, index) => {
            const {ngayChieuGioChieu, tenRap} = item;
        
            return (
              <Button
                className='schedule-item'
                key={index}
              >
                <Grid className='cinema-name'>
                  {tenRap}
                </Grid>
                <Divider className='devide'/>
                <Grid
                  className='schedule-detail'
                  to={CONTACT_PAGE}
                >
                  {ngayChieuGioChieu}
                </Grid>
              </Button>
            ) 
          })
        )
      }
    </div>
  )
}

ScheduleMovie.propTypes = {
  schedule: PropTypes.array,
};

export default ScheduleMovie
