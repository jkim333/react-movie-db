import React, { useContext } from 'react';
import SearchForm from './SearchForm';
import Movies from './Movies';
import { AppContext } from './context';
import Loading from './Loading';

export default function Home() {
  const { loading } = useContext(AppContext);

  return (
    <section className='home'>
      <SearchForm />
      {loading ? <Loading /> : <Movies />}
    </section>
  );
}
