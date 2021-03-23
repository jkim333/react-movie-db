import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ Poster, Title, Type, Year, imdbID }) {
  return (
    <article className='movie'>
      <Link to={`/movies/${imdbID}`}>
        <img
          src={
            Poster === 'N/A'
              ? 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
              : Poster
          }
          alt={Title}
          className='movie__poster'
        />
        <div className='movie__info'>
          <h4 className='movie__title'>{Title}</h4>
          <p className='movie__year'>{Year}</p>
        </div>
      </Link>
    </article>
  );
}
