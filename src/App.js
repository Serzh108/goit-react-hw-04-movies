import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import HomePage from './pages/HomePage';

class App extends Component {
  state = {};

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  //   getImages() {
  //   const { query, page } = this.state;
  //   const reqest = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  //   this.setState({ isLoading: true });
  //   fetch(reqest)
  //     .then(respons => respons.json())
  //     .then(results =>
  //       results.hits.map(({ id, webformatURL, largeImageURL }) => ({
  //         id,
  //         webformatURL,
  //         largeImageURL,
  //       })),
  //     )
  //     .then(data => {
  //       this.setState(prev => ({ imagesList: [...prev.imagesList, ...data] }));
  //       return data;
  //     })
  //     .then(data => this.scrollDown())
  //     .catch(error => console.log('Error = ', error))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  // btnClick = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  render() {
    const {} = this.state;
    return (
      <>
        <h1>TEST HOME WORK 04 REACT</h1>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/acc" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
