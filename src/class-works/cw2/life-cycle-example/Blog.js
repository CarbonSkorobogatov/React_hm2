import React, { Component } from 'react';
import PostList from "./components/PostList";
import AuthorInfo from "./components/AuthorInfo";
import { Button, Grid } from "semantic-ui-react";

class Blog extends Component {
  state = {
    selectedAuthorId: null,
    selectedPostId: null, 
  };

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  onSelectPost = post => {
    this.setState({ selectedAuthorId: post.userId})
    
  };


onSelectIdPost = post => {
  this.setState({ selectedPostId: post.id});
}


  render() {
    const { selectedAuthorId, selectedPostId, hasError } = this.state;
    if (hasError) return (
      <Button>Update</Button>
    );
    return (
      <Grid>
        <Grid.Column width={8}>
          <PostList 
          onPostClick={this.onSelectPost}
          onIdPostClick={this.onSelectIdPost} 
          selectedPostId = {selectedPostId}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <AuthorInfo authorId={selectedAuthorId} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Blog;
