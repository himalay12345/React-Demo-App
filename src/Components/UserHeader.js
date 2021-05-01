import React from 'react';
import {connect} from 'react-redux';
import Loader from './Loader'


class UserHeader extends React.Component
{
    render()
    {
      
        if(!this.props.user)
        {
            return <Loader/>
        }
        return <div className="header">{this.props.user.name}</div>
    }
}

const mapStateToProps = (state, myProps) =>{

    return {user:state.users.find(user => user.id === myProps.userId)}
}



export default connect(mapStateToProps)(UserHeader)
