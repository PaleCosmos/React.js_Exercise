import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  _renderMovie = () => {
    const movie = this.state.movies.map(movie => {
      return <Movie key={movie.id} title={movie.title} poster={movie.large_cover_image} />
    })
    return movie
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?quality=3D?')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        {this.state.movies ? this._renderMovie() : 'Loading'}
      </div>
    );
  }

  componentDidMount() {
    this._getMovies();
  }
}

export default App;
