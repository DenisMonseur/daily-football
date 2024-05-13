import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function FetchFootAPI({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch('https://api.football-data.org/v4/matches', {
          headers: {
            'X-Auth-Token': 'ca91059b8b9244c4a5fa18f6f615b8ff'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to retrieve data');
        }

        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchLatestPost();
  }, []);

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
}

export default FetchFootAPI;
export { Context };