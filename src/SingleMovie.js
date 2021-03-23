import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';

export default function SingleMovie() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=d2e298e5&i=${id}`
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className='single-movie'>
      {loading ? (
        <Loading />
      ) : (
        <div className='single-movie__container'>
          <img
            src={
              data.Poster === 'N/A'
                ? 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
                : data.Poster
            }
            alt={data.Title}
            className='single-movie__poster'
          />
          <div className='single-movie__description'>
            <h2 className='single-movie__title'>{data.Title}</h2>
            <p className='single-movie__plot'>{data.Plot}</p>
            <p className='single-movie__year'>{data.Year}</p>
            <Link to='/' className='btn'>
              back to movies
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
