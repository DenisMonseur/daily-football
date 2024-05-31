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
    console.log('Request body:', {
      title: post.title,
      content: post.content,
      username: user.username
    });

    const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        username: user.username
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update post');
    }

    const data = await response.json();
    console.log('Update response:', data);
    navigate(`/post/${id}`, { state: { post: data } });
  } catch (error) {
    setError(error.message);
  }
};

  const handleDelete = async () => {
  try {
    const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
      }),
    });

    console.log(user.username)

    if (!response.ok) {
      throw new Error('Failed to delete post');
    }

    navigate('/');
  } catch (error) {
    setError(error.message);
  }
};

  return (
    <div className='edit'>
      <form onSubmit={handleUpdate}>
        <h2>Edit Post</h2>
      {error && <p className="error">{error}</p>}
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        
        <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            required
          />
        <div className="buttons">
          <button type="submit" className='update'>Update Post</button>
        <button onClick={handleDelete} className='delete'>Delete Post</button>
        </div>
      
      </form>
    </div>
  );
};

export default EditPost;