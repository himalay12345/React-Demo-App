import React from 'react';
import VideoItem from './VideoItem'

const VideoList = (props) => {
    
    
    const videos = props.videos.map((video) => {
        return (<VideoItem key={video.snippet.channelId} OnClick={props.OnClick} video={video}/>)
    })

    return(
        <div className="ui very relaxed"  style={{border:'none',cursor:'pointer'}}>{videos}</div>
    )
}

export default VideoList