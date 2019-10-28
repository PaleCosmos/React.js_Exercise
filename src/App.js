import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  _renderMovie = () => {
    const movie = this.state.movies.map(movie => {
      return <Movie
        key={movie.id}
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres} 
        synopsis = {movie.synopsis}/>
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
    return fetch('https://yts.lt/api/v2/list_movies.json?quality=3D?sort_by=download_count')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className= {movies? "App" : "App-loading"}>
        {movies ? this._renderMovie() : 'Loading'}
      </div>
    );
  }

  componentDidMount() {
    this._getMovies();
  }
}

export default App;
