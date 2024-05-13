import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function FetchLatestPost({ children }) {
  const [donees, setDonees] = useState(null);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3b0af1a54398d8aeeb1c8154ce1faf06&page=1')
      .then(response => response.json())
      .then(data => {
        setDonees(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Failed to retrieve data:', error);
      });
  }, []);

  return (
    <Context.Provider value={donees}>
      {children}
    </Context.Provider>
  );
}

export default FetchLatestPost;
export { Context };