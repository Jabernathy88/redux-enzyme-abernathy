import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from './postActions';

class PostsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { error, loading, posts } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (loading) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
        <h4>Hello from PostsList</h4>
        {posts && posts.map(post => (
          <p key={post.id}>
            --{post.name}
          </p>
        ))};
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.posts.items,
  loading: state.posts.loading,
  error: state.posts.error
})

export default connect(mapStateToProps)(PostsList);
