import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useParams, useNavigate} from 'react-router-dom';
import AddComment from './AddComment.jsx';
import DisplayComments from './DisplayComments.jsx';
import { AuthContext } from "./AuthContext";

function Post() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, imageClass } = location.state || {};
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/comments/post/${id}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error: ${response.status} ${response.statusText} - ${errorData.error}`);
        }

        const data = await response.json();
        setComments(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to retrieve comments:', error);
        setError(`Failed to load comments: ${error.message}`);
      }
    };

    fetchComments();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-post/${id}`, { state: { post, imageClass } });
  };

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const updateComments = async () => {
    const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/comments/post/${id}`);
    const data = await response.json();
    setComments(data);
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='background-post'>
      <div className='post-single'>
        <div className={`image ${imageClass}`}>
        </div>
        <div className='info'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {user.username ==='admin' && (<button onClick={handleEdit}>Edit Post</button>) }
        </div>
      </div>
      <AddComment postId={id} onCommentAdded={handleCommentAdded} />
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <DisplayComments comments={comments} onUpdateComments={updateComments} />
      )}
    </div>
  );
}

export default Post;