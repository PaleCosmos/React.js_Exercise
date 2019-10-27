import React, { Component } from 'react';
import './Movie.css';
import propTypes from 'prop-types'


function Movie({ title, poster }) {
  return (
    <div >
      <MoviePoster URL={poster} />
      <h1>
        {title}
      </h1>
      <br />
    </div>
  )
}

function MoviePoster({ URL }) {
  return (
    <img alt='alt' src={URL} />
  )
}

Movie.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired
}

MoviePoster.propTypes = {
  URL: propTypes.string.isRequired
}

export default Movie;