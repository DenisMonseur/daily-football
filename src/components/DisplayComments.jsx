import React, { useContext } from 'react';
import { Context } from './FetchComments';
import { AuthContext } from "./AuthContext";
const { user } = useContext(AuthContext);

function DisplayComments() {
    const donees = useContext(Context);
    console.log(donees);


    return (
    <div className='comments-row'>
        {donees.map(comment => (
        <div key={comment.id} className='comment-card'>
            <div className="info">
                <p className='author'>{user.username}</p>
                <p className='comment'>{comment.comment}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayComments;
