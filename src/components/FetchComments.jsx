import React, { useState, useEffect, createContext } from 'react';

const CommentsContext = createContext();

function FetchComments({ children }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://denisproj-b94c31275a95.herokuapp.com/comments`)
        const data = await response.json();
        setComments(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CommentsContext.Provider value={comments}>
      {children}
    </CommentsContext.Provider>
  );
}

export default FetchComments;
export { CommentsContext as Context };