import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


export default class CommentItem extends React.Component {

constructor(props){
    super(props);
}

    render() {

        const { comment } = this.props;

        return (
            <div className={"comment-wrapper"}>
            <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>{comment.name}</Comment.Author>
              <Comment.Metadata>
                <div>{comment.email}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.body}</Comment.Text>
            </Comment.Content>
          </Comment>
          </div>
        )
    }
}
