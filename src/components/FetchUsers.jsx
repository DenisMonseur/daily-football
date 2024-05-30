import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function FetchUsers({ children }) {
  const [donees, setDonees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://denisproj-b94c31275a95.herokuapp.com/users');
        const data = await response.json();
        console.log(data)
        setDonees(data);
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

export default FetchUsers;
export { Context };