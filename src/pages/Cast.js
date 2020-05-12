import React, { Component } from 'react';
import axios from 'axios';
import * as settings from '../components/settings';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


class Cast extends Component {
  state = { castInfo: [] };

  componentDidMount() {
    const filmId = this.props.match.params.movieId;
    filmId && this.getData(filmId);
  }

  getData = async query => {
    const movieDetails = `${settings.movieDetails}${query}/credits?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;
    try {
      const response = await axios.get(movieDetails);
      this.setState(prev => ({
        castInfo: response.data.cast,
      }));
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  render() {
    const { castInfo } = this.state;
    return (
      <ul>
        {castInfo.map(item => (
          <li key={item.cast_id}>
            <img
              className="CastImg"
              src={
                item.profile_path ? settings.imagePath + item.profile_path : ''
              }
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>
              Character: <span>{item.character}</span>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
