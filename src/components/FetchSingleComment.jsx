import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function FetchSingleComment({ children }) {
  const [donees, setDonees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch('https://denisproj-b94c31275a95.herokuapp.com/comments/1');
        const data = await response.json();
        setDonees(data);
        console.log(data);
    } catch (error) {
        console.error('Failed to retrieve data:', error);
    }
    };

    fetchData();
  }, []);

  return (
    <Context.Provider value={donees}>
      {children}
    </Context.Provider>
  );
}

export default FetchSingleComment;
export { Context };