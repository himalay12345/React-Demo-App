import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';


class PostLists extends React.Component{

    componentDidMount()
    {
        // console.log(this.props)
        this.props.fetchPostsAndUsers();
    }

    renderList()
    {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader userId={post.userId}/>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render(){
        // console.log(this.props.posts)
    return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return {posts:state.posts}
}

export default connect( mapStateToProps,{fetchPosts, fetchPostsAndUsers})(PostLists);