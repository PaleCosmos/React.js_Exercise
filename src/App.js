import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state ={}

  _renderMovie = () => {
    const movie = this.state.movies.map((movie, index) => {
      return <Movie key={index} title={movie.title} poster={movie.poster} />
    })
    return movie
  }

  render() {
    return (
      <div className="app">
        {this.state.movies ? this._renderMovie() : 'Loading'}
      </div>
    );
  }

  componentDidMount() {
    fetch('https://yts.lt/api/v2/list_movies.json?quality=3D?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  
  }
}

export default App;
