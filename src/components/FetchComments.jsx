import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function FetchComments({ postId, children }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/comments/post/${postId}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchData();
  },);

  return (
    <Context.Provider value={comments}>
      {children}
    </Context.Provider>
  );
}

export default FetchComments;
export { Context };