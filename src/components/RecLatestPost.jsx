import React, { useContext, useState } from 'react';
import { Context } from './FetchLatestPost';
import { Link } from 'react-router-dom';
import { useList } from "./ListContext";

function RecLatestPost() {

  const donnees = useContext(Context);

  const cutOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) {
      return overview;
    }
    return overview.substr(0, maxLength) + "...";
  };


  return (
    <div className='row'>
      {donnees && donnees.results.map(post => (
        <div key={post.id} className='card'>
          <div className='image'>
            <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt="" />
          </div>
          <div className="info">
          <p className='title'>{post.title}</p>
          <p className='date'>{post.release_date}</p>
          <p className='resume'>{cutOverview (post.overview, 300)}</p>
            <Link to={`/post/${post.id}`} state={{post}}>
            <button>Read more</button>
            </Link>
          </div>
          </div>
      ))}
    </div>
  );
}

export default RecLatestPost;
