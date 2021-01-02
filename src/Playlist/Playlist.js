import React from 'react'
import './Playlist.scss'

const Playlist = (props) => {
    return (
        <iframe 
            className="playlist-card"
            src={props.link} 
            width="300" 
            height="380" 
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
        </iframe>
    )
}

export default Playlist

