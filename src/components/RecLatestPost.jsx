import React, { useContext } from 'react';
import { Context } from './FetchLatestPost';
import { useList } from "./ListContext";

function RecLatestPost() {

  const donnees = useContext(Context);

   const cutOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) {
      return overview;
    }
    return overview.substr(0, maxLength) + "...";
  };


  return (
    <div className='row'>
      {donnees && donnees.results.map(film => (
        <div key={film.id} className='card'>
          <div className='image'>
            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
          </div>
          <div className="info">
          <p className='title'>{film.title}</p>
          <p className='date'>{film.release_date}</p>
          <p className='resume'>{cutOverview (film.overview, 300)}</p>
          <button></button>
          </div>
          </div>
      ))}
    </div>
  );
}

export default RecLatestPost;
