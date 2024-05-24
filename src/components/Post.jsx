import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AddComment from './AddComment.jsx';
import DisplayComments from './DisplayComments.jsx';



function Post() {
  const location = useLocation();
  const { id } = useParams();
  const post = location.state.post; 

  return (
    <>
    <div className='post-single'>
        <div className='image'>
            <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt="" />
        </div>
        <div className='info'>
            <h2>{post.title}</h2>
            <p>Written on : {post.release_date}</p>
            <p>{post.overview}</p>
        </div>
    </div>
    <AddComment/>
    <DisplayComments/>
    </>

  );
}

export default Post;