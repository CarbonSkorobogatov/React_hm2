import React, { Component } from 'react';
import { Card, Icon, Image } from "semantic-ui-react";
import LoadingOverlay from "./LoadingOverlay";

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      albums: '', 
      loading: false,
      error: ''
    }
  }

  componentDidMount() {
    const { authorId } = this.props;
    if (authorId) {
      this.fetchAuthor(authorId);
      this.fetchAlbumn(authorId);

    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authorId !== this.props.authorId && this.props.authorId) {
      this.fetchAuthor(this.props.authorId);
      this.fetchAlbumn(this.props.authorId);
    }
  }

  fetchAuthor(authorId) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then(response => response.json())
      .then(data => this.setState({ author: data, loading: false }))
      .catch(e => this.setState({ error: e.message, loading: false, author: null }))
  }

  fetchAlbumn(authorId) {
    this.setState( {loading: true});

    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
    .then(response => response.json())
    .then(data => this.setState({ albums: data, loading: false }))
    .catch(e => this.setState({ error: e.message, loading: false }))

  }

  render() {
    const { error, author, loading, albums } = this.state;

   
    return (
      <div className='author-fixed'>
        <div className='error'>{error}</div>
        <LoadingOverlay active={loading} />
        {author &&
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false}/>
          <Card.Content>
            <Card.Header>{author.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{author.email}</span>
            </Card.Meta>
            <Card.Description>
              {author.address.city}, {author.address.street} {author.address.zipcode}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='camera'/>
              {albums.length} Albums {/* TODO Fetch count of albums */}
            </a>
          </Card.Content>
        </Card>
        }
      </div>
    );
  }
}

export default AuthorInfo;
