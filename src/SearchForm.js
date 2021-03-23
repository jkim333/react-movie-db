import React, { useContext } from 'react';
import { AppContext } from './context';

export default function SearchForm() {
  const { searchTerm, setSearchTerm, errorMsg } = useContext(AppContext);

  return (
    <form className='search-form'>
      <h1>search movies</h1>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {errorMsg ? <p className='error-msg'>{errorMsg}</p> : null}
    </form>
  );
}
