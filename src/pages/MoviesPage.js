import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as settings from '../components/settings';
import querySrting from 'query-string';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

class MoviesPage extends Component {
  state = {
    selectedMoviesList: [],
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    this.setState({ value });
    this.getData(value);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?query=${value}`,
    });
    // this.props.location.search = `?query=${value}`;
  };

  handleOnChange = e => this.setState({ value: e.target.value });

  componentDidMount() {
    const parsed = querySrting.parse(this.props.location.search);
    this.getData(parsed.query);
  }

  getData = async query => {
    if (query) {
      const searchFilm = `${settings.keyWordSearch}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&query=${query}`;
      try {
        const response = await axios.get(searchFilm);
        this.setState(prev => ({
          selectedMoviesList: [...response.data.results],
        }));
      } catch (error) {
        console.log('Error: ', error);
      }
    }
  };

  render() {
    const { selectedMoviesList: moviesList, value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            value={value}
            onChange={this.handleOnChange}
          />
          <button type="submit">Search</button>
        </form>

        <ul>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
