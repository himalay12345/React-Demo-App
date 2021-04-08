import React from 'react';

class VideoItem extends React.Component{

    OnVideoClick = (e) => {
        e.preventDefault();
        this.props.OnClick(this.props.video)
    }

    render(){
    return (        
      <div className="item" style={{border:'1px solid grey',borderRadius:'5px',padding:'10px'}} onClick={this.OnVideoClick}>
    <img className="ui avatar image" alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url}/>
    <div className="content">
      <div className="description">{this.props.video.snippet.description}</div>
    </div>
  </div>
    )
    }
}

export default VideoItem