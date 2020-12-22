import React, { Component } from 'react';
import { Feed, Icon, Dimmer, Loader } from "semantic-ui-react";
import PostItem from "./PostItem";
import LoadingOverlay from "./LoadingOverlay";


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ loading: true });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts
        })
      })
      .catch(e => {
        this.setState({
          loading: false
        });
        alert(e.message)
      })
  }

  

  render() {
    const { loading, posts } = this.state;
    const {selectedPostId, onPostClick, onIdPostClick } = this.props;
    return (
      <div className='post-list-wrapper'>
        <LoadingOverlay active={loading} />
        { posts.map(post => <PostItem 
        onClick={() => onPostClick(post)} 
        onClick_id={() => onIdPostClick(post)
         
        }
        selectedPostId = {selectedPostId}
        post={post} 
        key={post.id}  /> )}
      </div>

    );
  }
}

export default PostList;
