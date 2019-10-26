import React, { Component } from 'react';
import './Movie.css';
import propTypes from 'prop-types'

class Movie extends Component {

  static propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
  }

  render() {
    console.log(this.props)
    return (
      <div >
        <MoviePoster URL={this.props.poster} />
        <h1>
          {this.props.title}
        </h1>
        <br />
      </div>
    );
  }
}

class MoviePoster extends Component {

  static propTypes = {
    URL : propTypes.string.isRequired
  }

  render() {
    return (
      <img alt='alt' src={this.props.URL} width='300' />
    )
  }
}

export default Movie;