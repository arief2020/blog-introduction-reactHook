import React, { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';

export default function PostFormComponent() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addPost } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body, id: Date.now() };
    addPost(newPost);
    setTitle('');
    setBody('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}
