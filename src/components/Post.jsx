import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import AddComment from './AddComment.jsx';
import FetchComments from './FetchComments.jsx';
import DisplayComments from './DisplayComments.jsx';

function Post() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleEdit = () => {
    navigate(`/edit-post/${id}`, { state: { post } });
  };

  return (
    <div className='background-post'>
      <div className='post-single'>
        <div className='image'>
          <img src="../src/assets/USG.png" alt="Post" />
        </div>
        <div className='info'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={handleEdit}>Edit Post</button>
        </div>
      </div>
      {/* <AddComment postId={id} />
      <FetchComments postId={id}>
        <DisplayComments />
      </FetchComments> */}
    </div>
  );
}

export default Post;