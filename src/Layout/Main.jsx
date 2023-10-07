/** @format */

import React, { Component } from 'react';
import { Movies } from '../Component/Movies';
import { Preloader } from '../Component/PreLoader';
import { Search } from '../Component/Search';

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=terminators`)
      .then((respons) => respons.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  handleChangeSearch = (str, type = 'all') => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((respons) => respons.json())
      .then((data) => this.setState({ movies: data.Search, loading: false}));
  };

  render() {
    return (
      <main className="container content">
        <Search handleChangeSearch={this.handleChangeSearch} />
        {this.state.loading ? 
          <Preloader />
        : 
          <Movies movies={this.state.movies} />
        }
      </main>
    );
  }
}

export { Main };
