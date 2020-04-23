import React from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';
import fakeData from '../fakeData.json';
import fetch from 'node-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: fakeData.movies[0],
      movies: fakeData.movies,
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((movies) => {
        this.setState({ currentMovie: movies[0], movies: movies });
        console.dir(movies);
        console.log('완료');
      });
  }

  handleCardClick(movie) {
    this.setState({ currentMovie: movie });
  }

  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <CurrentMovie movie={this.state.currentMovie} />
          <MovieRankList
            movies={this.state.movies}
            handleCardClick={this.handleCardClick}
          />
        </div>
      </>
    );
  }
}

export default App;
