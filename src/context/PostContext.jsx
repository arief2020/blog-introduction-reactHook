import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const contextValue = useMemo(() => ({ posts, addPost, deletePost }), [posts]);

  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  );
}

PostProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { PostProvider, PostContext };
