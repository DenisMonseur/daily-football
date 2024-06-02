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
      {posts.map((post, index) => (
        <div key={post.id} className='card'>
          <div className={`image image${index + 1}`}>
          </div>
          <div className='info'>
            <p className='title'>{post.title}</p>
            <p className='content'>{cutOverview(post.content, 400)}</p>
            <Link to={`/post/${post.id}`} state={{ post, imageClass: `image${index + 1}` }}>
              <button>Read more</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecLatestPost;