import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    if(props.song){
    return (
    <div>
        <h3>Details For:</h3>
        <p>Song : {props.song.title}</p>
    <p>Duration : {props.song.duration}</p>
    </div>
    )
    }else{
        return <div>Plese select a song !</div>
    }
}

const mapStateToProps = (state) =>
{
    return {song: state.selectedSong}
}

export default connect(mapStateToProps) (SongDetail)


