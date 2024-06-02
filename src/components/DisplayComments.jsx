import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

function DisplayComments({ comments, onUpdateComments, onDeleteComment }) {
  const [updatingCommentId, setUpdatingCommentId] = useState(null);
  const [updatedContent, setUpdatedContent] = useState('');
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/comments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          updatedComment: updatedContent,
          username: user.username
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }
      
      onUpdateComments();
      setUpdatingCommentId(null);
      setUpdatedContent('');

    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/comments/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      onUpdateComments();

    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleUpdateSubmit = (id) => {
    handleUpdate(id);
  };

  const formatDate = (dateString) => {
    return dateString.split('T')[0]; 
  };

  if (!comments || comments.length === 0) {
    return <div className='no-comments'>No comments available.</div>;
  }

  return (
    <div className='comments-row'>
      {comments.map((comment) => (
        <div key={comment.id} className='comment-card'>
          <div className='comment-value'>
            <p className='comment-date'>{formatDate(comment.createdAt)}</p> 
            <p className='comment-user'>{comment.username}</p>
            <p className='comment-text'>{comment.content}</p>
          </div>
          <div className="buttons">
            <button onClick={() => setUpdatingCommentId(comment.id)}>Update</button>
            <button className='black' onClick={() => handleDelete(comment.id)}>Delete</button>
          </div>
          {updatingCommentId === comment.id && (
            <div className='comment-change'>
              <input placeholder='Type new text'
                type="text"
                value={updatedContent}
                onChange={handleInputChange}
              />
              <button onClick={() => handleUpdateSubmit(comment.id)}>Submit</button>
            </div>
          )}
        </div> 
      ))}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default DisplayComments;