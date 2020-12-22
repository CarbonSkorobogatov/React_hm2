import React from 'react'
import CommentItem from './CommentItem';

export default class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            comments: []
        }
    }

    componentDidMount() {
        const {selectedPostId } = this.props;
        if(selectedPostId) {
            this.fetchPostComments(selectedPostId);
        }
    }

    fetchPostComments(PostId){
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}/comments`)
            .then(response => response.json())
            .then(comments => {
                this.setState({
                        loading: false,
                        comments
                })
            })
    }
   
    render() {
        const {comments} = this.state;
        
        return (
            <div className={"comment-item"}>
               { comments.map( Comment => <CommentItem comment = {Comment} key={comments.id}/>)}
            </div>
        )
    }
}
