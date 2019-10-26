import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacker",
  "OldBoy",
  "Star Wars"
];

const movieImages = [
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Movie title={movieTitles[0]} poster = {movieImages[0]}/>
        <Movie title={movieTitles[1]} poster = {movieImages[1]}/>
        <Movie title={movieTitles[2]} poster = {movieImages[2]}/>
        <Movie title={movieTitles[3]} poster = {movieImages[3]}/>
      </div>
    );
  }
}

export default App;
