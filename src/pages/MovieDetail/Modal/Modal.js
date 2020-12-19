/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { 
  Button, 
  Grid, 
  Typography,
  Modal,
  Backdrop,
  Fade,  
  CardMedia
} from '@material-ui/core'
import PropTypes from 'prop-types';
import { useStyles } from './useStyles'; 
import './Modal.scss'

const ModalPopup = ({trailer}) => {
  const classes= useStyles();
  const [open, setOpen]= useState(false);

  const handleOpen=()=>{
    setOpen(true);
  }

  const handleClose=()=>{
    setOpen(false);
  }
  return (
    <Grid style={{paddingTop:'50px'}}>
      <Button 
        className='style detail-btn'
        onClick={handleOpen}
        type='button'
      > 
        <Typography
          component='h6'
          variant='h6'
        >
            Trailer
        </Typography>
      </Button>

      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout:500,
        }}
        className={classes.modal}
        closeAfterTransition
        onClose={handleClose}
        open={open}
      >
        <Fade in={open}>
          <CardMedia 
            className={classes.trailer}
            component='iframe'
            height='500'
            image={trailer}
          />
        </Fade>
      </Modal>
    </Grid>
  )
}

ModalPopup.prototype= {
  trailer: PropTypes.string,
}
export default ModalPopup
