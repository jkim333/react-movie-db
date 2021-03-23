import React, { useContext } from 'react';
import { AppContext } from './context';
import Movie from './Movie';

export default function Movies() {
  const { movies } = useContext(AppContext);

  return (
    <section className='movies'>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </section>
  );
}
