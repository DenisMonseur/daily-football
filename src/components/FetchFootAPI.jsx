import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

function FetchFootAPI({ children }) {
  const apiKey = 'ca91059b8b9244c4a5fa18f6f615b8ff'
  const leagueId = 524
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch(`https://api.football-data.org/v2/competitions/${leagueId}/standings`, {
          headers: {
            'X-Auth-Token': apiKey
          }
        });

        if (!response.ok) {
          throw new Error('Failed to retrieve data');
        }

        const data = await response.json();
        setData(data)
        console.log(data);
        return data
      
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