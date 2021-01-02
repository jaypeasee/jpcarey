import React from 'react'
import './Podcast.scss'

const Podcast = (props) => {
    return (
        <iframe
            className="podcast-card"
            src={props.link} 
            width="100%" 
            height="232" 
            frameborder="value" 
            allowtransparency="true" 
            scrolling="no"
            allow="encrypted-media">
        </iframe>
    )
}

export default Podcast