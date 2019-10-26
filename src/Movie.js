import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    console.log(this.props)
    return (
      <div >
          <MoviePoster URL = {this.props.poster}/>
          <h1>
            {this.props.title}
          </h1>
          <br/>
      </div>
    );
  }
}

class MoviePoster extends Component{
  render(){
    return (
      <img src = {this.props.URL} width = {300}/>
    )
  }
}

export default Movie;