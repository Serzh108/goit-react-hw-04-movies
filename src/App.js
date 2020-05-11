import React, { lazy, Suspense, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import MoviesDetailsPage from './pages/MovieDetailsPage';
import axios from 'axios';
import * as settings from './components/settings';

const AsyncHomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChankName: "home-page" */),
);
const AsyncMoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChankName: "movies-page" */),
);

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const settings = {
//   popularFilms: 'trending/movie/day',
// };

class App extends Component {
  state = {
    moviesList: [],
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps, prevState) {}

  async getData() {
    const popular = `${settings.popularFilms}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;
    try {
      const response = await axios.get(popular);
      this.setState(prev => ({
        moviesList: [...prev.moviesList, ...response.data.results],
      }));
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  
  render() {
    const { moviesList } = this.state;
    return (
      <>
        <Nav />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <AsyncHomePage {...props} moviesList={moviesList} />
              )}
            />
            <Route path="/movies/:movieId" component={MoviesDetailsPage} />
            <Route path="/movies" component={AsyncMoviesPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
