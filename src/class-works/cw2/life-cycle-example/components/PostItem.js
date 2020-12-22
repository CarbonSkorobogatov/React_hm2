import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";
import CommentList from './CommentList';

class PostItem extends Component {


  render() {
    const { post, onClick, onClick_id, selectedPostId } = this.props;

    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary onClick={onClick}>
              <Feed.User>{post.title}</Feed.User>
            </Feed.Summary>
            <Feed.Extra text>
              {post.body}
            </Feed.Extra>
            

            <div onClick={onClick_id} className={"comments"}>Show all comments</div>
            
            
            {post.id === selectedPostId && 
            <CommentList selectedPostId = {selectedPostId} />}

          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostItem;
