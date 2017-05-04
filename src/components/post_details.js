import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CircularProgress,
  FlatButton} from 'material-ui';

import { fetchPost, deletePost } from '../actions';

class PostDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const post = this.props.post;

    if (!post) {
      return (
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <CircularProgress size={80} thickness={5} />
          </div>
      )
    }
    return (
        <Card style={{marginTop: '50px'}}>
          <CardTitle title={post.title} subtitle={post.categories} />
          <CardText>
            {post.content}
          </CardText>
          <CardActions>
            <Link to="/">
              <FlatButton label="go back" />
            </Link>
            <FlatButton secondary={true} label="delete" onClick={this.onDeleteClick.bind(this)} />
          </CardActions>
        </Card>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetails);