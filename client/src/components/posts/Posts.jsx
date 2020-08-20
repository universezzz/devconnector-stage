import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import PostItem from './PostItem';
import Spinner from '../common/Spinner';
import { getPosts } from '../../thunks/post';


function Posts({ getPosts, post: { posts, loading } }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome to community
      </p>
      <PostForm />
      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
