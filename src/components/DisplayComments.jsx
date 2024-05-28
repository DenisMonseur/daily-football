import React, { useContext } from 'react';
import { Context } from './FetchComments';

function DisplayComments() {
  const comments = useContext(Context);

  return (
    <div className='comments-row'>
      {comments.map(comment => (
        <div key={comment.id} className='comment-card'>
          <div className="info">
            {/* <p className='author'>{comment.username}</p> */}
            <p className='comment'>{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayComments;
