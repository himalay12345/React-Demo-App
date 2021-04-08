import React from 'react';


class VideoSearchBar extends React.Component{
    state = { term : '' }

    onFormSubmit = (e) =>{
        e.preventDefault(); 
        this.props.onSubmit(this.state.term)
    }
    render()
    {
        return(
            <form className='form-group' onSubmit={this.onFormSubmit}>
            <div className='container' style={{padding:'10px'}}>
            <div className="ui fluid icon input">
                <input type="text" value={this.state.term} placeholder="Search something .............." onChange={(e) => this.setState({term:e.target.value})} style={{display:'block',width:'100%'}}/>
            <i className="search icon"></i>
            </div>
            </div>
            </form>
        )
    }
}

export default VideoSearchBar;