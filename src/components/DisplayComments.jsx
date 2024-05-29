import React, { useContext } from 'react';
import { Context } from './FetchComments';

function DisplayComments() {
  const comments = useContext(Context);

  if (!comments || comments.length === 0) {
    return <div className='no-comments'>No comments available.</div>;
  }

  return (
    <div className='comments-row'>
      {comments.map((comment) => (
        <div key={comment.id} className='comment-card'>
          <div className='comment-info'>
            <p className='comment-text'>{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayComments;