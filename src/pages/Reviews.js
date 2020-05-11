import React, { Component } from 'react';
import axios from 'axios';
import * as settings from '../components/settings';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const settings = {
//   movieDetails: 'movie/',
// };

class Reviews extends Component {
  state = { reviewsData: [] };

  componentDidMount() {
    const filmId = this.props.match.params.movieId;
    filmId && this.getData(filmId);
  }

  getData = async query => {
    const movieDetails = `${settings.movieDetails}${query}/reviews?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;
    try {
      const response = await axios.get(movieDetails);
      this.setState(prev => ({
        reviewsData: response.data.results,
      }));
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  render() {
    const { reviewsData } = this.state;
    return reviewsData.length ? (
      <ul>
        {reviewsData.map(review => (
          <li key={review.id}>
            <p>
              Author: <span>{review.author}</span>
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie.</p>
    );
  }
}

export default Reviews;
