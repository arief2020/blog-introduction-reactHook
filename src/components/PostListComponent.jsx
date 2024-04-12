import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import PostComponent from './PostComponent';

export default function PostListComponent() {
  const { posts } = useContext(PostContext);
  return (
    <div>
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
}
