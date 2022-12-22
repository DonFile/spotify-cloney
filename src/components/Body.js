import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
    const [{discover_weekly},dispatch] = useDataLayerValue()
  return (
      <div className='body'>
          <Header spotify={spotify} />
          
          <div className='body_info'>
              <img src={discover_weekly?.images[0].url} alt='' />
              <div className='body_infoText'>
                  <strong>PLAYLIST</strong>
                  <h2>Collection</h2>
                  <p>{ discover_weekly?.description}</p>
              </div>
              <div className='body_songs'>
                  <div className='body_icons'>
                      <PlayCircleIcon fontSize='large'/>
                      <FavoriteIcon />
                      <MoreHorizIcon/>
                  </div>
                  {discover_weekly?.tracks.items.map((item) => (
                      <SongRow track={ item.track} />
                  ))}
            </div>
          </div>
    </div>
  )
}

export default Body