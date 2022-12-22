import React from 'react'
import './Footer.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer_left'>
              <img className='footer_albumLogo' src='https://notjustok.com/eastafrica/wp-content/uploads/sites/3/2022/10/WhatsApp-Image-2022-10-25-at-19.51.14.jpeg' alt='' />
              <div className='footer_songInfo'>
                  <h4>Why me</h4>
                  <p>Usher</p>
              </div>
          </div>

          <div className='footer_center'>
              <ShuffleIcon className='footer_green' />
              <SkipPreviousIcon className='footer_icon' />
              <PlayCircleIcon fontSize='large' className='footer_icon' />
              <SkipNextIcon className='footer_icon' />
              <RepeatIcon className='footer_green'/>
          </div>

          <div className='footer_right'>
              <Grid container spacing={2}>
                  <Grid item><PlaylistPlayIcon /></Grid>
                  <Grid item><VolumeDownIcon /></Grid>
                  <Grid item xs><Slider/></Grid>
              </Grid>
          </div>
    </div>
  )
}

export default Footer