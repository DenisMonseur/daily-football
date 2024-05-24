import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [resMessage, setResMessage] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://denisproj-b94c31275a95.herokuapp.com/posts/create', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        title: title,
        content: content,
        username:user.username
        })
      });
      console.log(user);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setResMessage(`Post ${title} successfully created`);
      } else {
        setResMessage(`Failed to create: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setResMessage('Error fetching data');
    }
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="content">Content:</label>
        <textarea name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button type="submit" className="button-ball"></button>
        <p className="alert">{resMessage}</p>
      </form>
    </div>
  );
}

export default CreatePost;