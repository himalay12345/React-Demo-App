import React from 'react';


class SearchBar extends React.Component{

    state = { term : '' }

    onFormSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <form className='form-group' onSubmit={this.onFormSubmit}>
            <div className='container' style={{padding:'20px 50px'}}>
            <div className="ui fluid icon input">
            <input type="text" placeholder="Serach something..." value={this.state.term}  onChange={ e => this.setState({term: e.target.value})} />
            <i className="search icon"></i>
            </div>
            </div>
            </form>
        )
    }
}


export default SearchBar;

