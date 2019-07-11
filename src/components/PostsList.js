import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostsList } from '../actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.getPostsList();
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id} className="p-3">
        <h4 className="text-info">{post.title}</h4>
        <div>{post.body}</div>
      </div>
    ))

    return (
      <div className="p-3">
        <h4>Hello from Posts</h4>
        {postItems}
      </div>
    )
  };
};

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
