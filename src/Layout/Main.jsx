/** @format */

import React, { useState, useEffect } from 'react';
import { Movies } from '../Component/Movies';
import { Preloader } from '../Component/PreLoader';
import { Search } from '../Component/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleChangeSearch = (str, type = 'all') => {
    fetch(
      `https://www.omdbapi.com/?apikey=68641766&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((respons) => respons.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        setMovies(err)
        setLoading(false)
      })
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=68641766&s=terminators`)
      .then((respons) => respons.json())
      .then((data) => 
      {
        setMovies(data.Search);
        setLoading(false);
      })
      
  }, []);

  return (
    <main className="container content">
      <Search handleChangeSearch={handleChangeSearch} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

