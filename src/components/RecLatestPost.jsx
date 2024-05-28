import React, { useContext } from 'react';
import { Context } from './FetchLatestPost';
import { Link } from 'react-router-dom';

function RecLatestPost() {
  const posts = useContext(Context);

  const cutOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) {
      return overview;
    }
    return overview.substr(0, maxLength) + "...";
  };

  return (
    <div className='row'>
      {posts.map(post => (
        <div key={post.id} className='card'>
          <div className="image">
            <img src="../src/assets/USG.png" alt="ici c est st-gilles" />
          </div>
          <div className="info">
            <p className='title'>{post.title}</p>
            <p className='content'>{cutOverview(post.content, 300)}</p>
            <Link to={`/post/${post.id}`} state={{ post }}>
              <button>Read more</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecLatestPost;
