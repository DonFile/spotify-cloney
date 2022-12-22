import { Title } from '@mui/icons-material'
import { Card } from '@mui/material'
import React from 'react'

const Playlist = ({title,Info}) => {
  return (
      <div className='playlist'>
          <div className='playlist_card'>
              <Card>
                  <img src='' alt='' />
                  <h4>{ Title}</h4>
                  <p>{ Info}</p>
              </Card>
          </div>
          
    </div>
  )
}

export default Playlist