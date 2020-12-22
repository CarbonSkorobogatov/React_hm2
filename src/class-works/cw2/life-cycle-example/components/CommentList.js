import React from 'react'
import CommentItem from './CommentItem';
import LoadingOverlay from './LoadingOverlay'

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
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}/comments`)
            .then(response => response.json())
            .then(comments => {
                this.setState({
                        loading: false,
                        comments
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
        const {comments, loading} = this.state;
        
        return (
            <div className={"comment-item"}>
                 <LoadingOverlay active={loading} />
               { comments.map( Comment => <CommentItem comment = {Comment} key={comments.id}/>)}
            </div>
        )
    }
}
