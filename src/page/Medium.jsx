//MOVIE SEARCH

// Note:  Solutions should use class components. 
//----------------------------------------------------------------
// MEDIUM: Program a movie search app with React hooks and React Router.
//   Utilize an API to fetch movie data based on user search queries.
//   Display search results and implement a detailed view for each movie.

//*********NOTES ***********
//** if you type in movie in search bar- it will display movie list
// click on any movie title from the list and
// it will then display movie overview, release date, and movie poster. 
// and you can do that by clicking through each movie title. 

import React, { Component } from 'react';
import axios from 'axios';
import Search from '../components/Search';

const apiKey = '7757357427f139ee5114c4d5e2571a17';

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedMovieId: null,
      movie: {},
      loading: false,
      error: null,
    };
  }

  handleMovieClick = async (movieId) => {
    this.setState({ selectedMovieId: movieId, loading: true });

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      this.setState({ movie: response.data, loading: false, error: null });
    } catch (error) {
      this.setState({ loading: false, error: 'Error fetching movie details' });
    }
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${this.state.searchQuery}&api_key=${apiKey}`
      );
      this.setState({ movies: response.data.results, error: null });
    } catch (error) {
      this.setState({ error: 'Error fetching movies' });
    }
  };

  render() {
    const { searchQuery, selectedMovieId, movie, loading, error } = this.state;

    return (
      <div>
        <Search
          handleMovieClick={this.handleMovieClick}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchQuery={searchQuery}
          error={error}
        />
        
        {selectedMovieId && (
          <div>
            {loading && <p>Loading movie details...</p>}
            {error && <p className="error">{error}</p>}
            {Object.keys(movie).length > 0 && (
              <div>
                <p>{movie.overview}</p>
                <h2>
                  {movie.title}
                  <p>Release date: {movie.release_date}</p>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '200px', height: '300px' }}
/>
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Medium;



