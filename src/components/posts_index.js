import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  List,
  ListItem,
  Divider,
  Subheader,
  FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
      <div key={post.id}>
        <Divider inset={false} />
        <Link  to={`/posts/${post.id}`} style={{textDecoration: 'none'}}>
        <ListItem
            primaryText={post.title}
            secondaryText={post.content}
            secondaryTextLines={1}
        />
        </Link>
      </div>
      )
    })
  };

  render() {
    return (
        <div>
          <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '30px'}}>
            <Link to="/posts/new">
              <FloatingActionButton secondary={true} zDepth={2}>
                <ContentAdd />
              </FloatingActionButton>
            </Link>
          </div>
          <List>
            <Subheader>Posts</Subheader>
            {this.renderPosts()}
          </List>
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