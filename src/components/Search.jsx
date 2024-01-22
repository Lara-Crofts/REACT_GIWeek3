import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Search.css';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      movies: [],
      error: null,
    };
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const apiKey = '7757357427f139ee5114c4d5e2571a17'; 
      const apiUrl = 'https://api.themoviedb.org/3/search/movie';
      
      const response = await axios.get(apiUrl + '?query=' + this.state.searchQuery + '&api_key=' + apiKey);
      
      this.setState({ movies: response.data.results, error: null });
    } catch (error) {
      this.setState({ error: 'Error fetching movies' });
    }
  }

  render() {
    const { searchQuery, movies, error } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={this.handleChange}
            placeholder="Search for movies"
          />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>}
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => this.props.handleMovieClick(movie.id)}>
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Search;
