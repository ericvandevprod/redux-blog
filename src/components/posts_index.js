import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  constructor() {
    super();

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
          <li className="list-group-item" key={post.id}>{post.title}</li>
      )
    })
  };

  render() {
    return (
        <div>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <h2>Posts</h2>
          <ul>
            {this.renderPosts()}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);