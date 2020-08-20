import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/post';

function Post({ match, getPost, post: { post, loading } }) {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post == null ? (
    <Spinner />
  ) : (
    <>
      <Link to='/posts' className='btn'>
        Back to posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </>
  );
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

const mapDispatchToProps = {
  getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
