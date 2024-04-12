import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PostContext } from '../context/PostContext';

export default function PostComponent({ post }) {
  const { deletePost } = useContext(PostContext);

  const handleDelete = () => {
    deletePost(post.id);
  };
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

PostComponent.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
