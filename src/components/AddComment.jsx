import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

function AddComment({ postId }) {
  const [comment, setComment] = useState('');
  const [resMessage, setResMessage] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://denisproj-b94c31275a95.herokuapp.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: comment,
          username: user.username,
          postId: postId,
        }),
      });
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setResMessage(`Comment (${comment}) successfully sent`);
        setComment(''); 
      } else {
        setResMessage(data.message || 'Error sending comment');
      }
    } catch (error) {
      console.error(error);
      setResMessage('Error fetching data');
    }
  };

  return (
    <div className="add-comment">
      <h3>Leave a comment :</h3>
      <form onSubmit={handleSubmit}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        <button type="submit">Submit</button>
        <p className="alert">{resMessage}</p>
      </form>
      
    </div>
  );
}

export default AddComment;