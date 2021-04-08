import React from 'react';
import Loader from './Loader';

const VideoPlayer = ({video}) => {
   
    if(video){
    return (
    <div>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.description} style={{width:'100%'}} height="500" allow="accelerometer;" allowFullScreen autoplay></iframe>
        <p style={{marginTop:'20px',fontWeight:'bold'}}>{video.snippet.description}</p>
    </div>
    )}

    else{
        return <Loader/>
    }

}


export default VideoPlayer