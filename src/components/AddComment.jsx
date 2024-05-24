import { useState } from "react";

function AddComment() {

    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://denisproj-b94c31275a95.herokuapp.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        comment: comment
        })
      });
      console.log(user);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setResMessage(`Post ${title} successfully created`);
      } else {
        setResMessage(`Failed to create: ${data.error}`);
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