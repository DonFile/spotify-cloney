import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';


const Sidebar = () => {
    const [{playlists},dispatch] = useDataLayerValue()
    return (
        <div className='sidebar'>
            <img className='sidebar_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ057HBKYGvHGqFSigWBSn_PZFXRsICls11lqrMyp5pxDhgaQ2k35bS7eZzlZ6rUHp7Y_Y&usqp=CAU' alt='' />
            <SidebarOption Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search' />
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
            <br />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar