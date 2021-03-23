import React, { useState, useEffect, useCallback } from 'react';

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('batman');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=d2e298e5&s=${searchTerm}`
      );
      const data = await response.json();
      if (data.Error) {
        setErrorMsg(data.Error);
      } else {
        setMovies([...data.Search]);
        setErrorMsg('');
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [searchTerm]);

  // When the app loads for the first time
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider
      value={{ movies, searchTerm, loading, errorMsg, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
