import React, { useContext } from 'react';
import { Context } from './FetchFootAPI';
import { useList } from "./ListContext";

function RecFootAPI() {

  const donnees = useContext(Context);

  return (
    <div className='row'>
      {donnees && donnees.results.map(match => (
        <div key={match.id} className='card'>
          <div className='home-team team'>

          </div>
          <div className='away-team team'>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecFootAPI;
