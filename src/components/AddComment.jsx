import { useState,useContext } from "react";
import { AuthContext } from "./AuthContext";

function AddComment() {

  const [comment, setComment] = useState('')
  const [message, setResMessage] = useState('')
  const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://denisproj-b94c31275a95.herokuapp.com/comments', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        comment: comment,
        username: user.username,
        postId:1
        })
      });
      // console.log(user);
      const data = await response.json();
      // console.log(data);

      if (response.ok) {
        setResMessage(`Comment succesfully sended`);
      } 

    } catch (error) {
      console.error(error);
      setResMessage('Error fetching data');
    }
  };

    return (
        <div className="add-comment">
            <h3>Leave a comment :</h3>
            <form onSubmit={handleSubmit}>
                <textarea value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddComment;