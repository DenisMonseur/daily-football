import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(location.state?.post || { title: '', content: '' });
  const [error, setError] = useState(null);

  console.log(id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      const data = await response.json();
      navigate(`/post/${id}`, { state: { post: data } });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/posts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default EditPost;