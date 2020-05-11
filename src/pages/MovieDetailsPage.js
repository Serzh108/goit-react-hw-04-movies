import React, { lazy, Suspense, Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Reviews from './Reviews';
import axios from 'axios';
import * as settings from '../components/settings';

const AsyncCast = lazy(() =>
  import('./Cast' /* webpackChankName: "cast-page" */),
);

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const settings = {
//   movieDetails: 'movie/',
//   imagePath: 'https://image.tmdb.org/t/p/w500',
// };

class MovieDetailsPage extends Component {
  state = { moveiInfo: {} };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.getData(movieId);
  }

  getData = async query => {
    const movieDetails = `${settings.movieDetails}${query}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;
    try {
      const response = await axios.get(movieDetails);
      this.setState(prev => ({
        moveiInfo: {
          ...response.data,
        },
      }));
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  handleClickBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push('/');
  };

  render() {
    const {
      id,
      title,
      overview,
      popularity,
      poster_path,
      genres,
    } = this.state.moveiInfo;
    return (
      <>
        <div className="DetailsInfo">
          <div>
            <button className="GoBackButton" onClick={this.handleClickBack}>
              &#8592; Go back
            </button>
            <img
              className="DetailsImg"
              src={poster_path ? settings.imagePath + poster_path : ''}
              alt="img"
            />
          </div>
          <div className="DetailsInfoTextBlock">
            <div>
              <h3>{title}</h3>
              <p>User scope: {Math.round(popularity)}%</p>
            </div>
            <div>
              <h4>Overview</h4>
              <p>{overview}</p>
            </div>
            <div>
              <h4>Genres</h4>
              <p>
                {genres
                  ? genres.map(genre => (
                      <span key={genre.name}> {genre.name} </span>
                    ))
                  : null}
              </p>
            </div>
          </div>
        </div>
        <div className="AdditionalInfo">
          <p>Additional information</p>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `/movies/${id}/cast`,
                }}>
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/movies/${id}/reviews`,
                }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/movies/:movieId/cast" component={AsyncCast} />
          </Suspense>
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
