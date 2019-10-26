import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    title: "Full Metal Jacket",
    poster: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    title: "OldBoy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  },
  {
    title: "Star Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
  },
  {
    title: "아기 공룡 둘리",
    poster: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27217937558634C21A"
  }
]

class App extends Component {

  UNSAFE_componentWillMount(){
this.log('componentWillMount')
  }

  UNSAFE_componentWillReceiveProps(){
this.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(){
this.log('shouldComponentUpdate')
  }

  UNSAFE_componentWillUpdate(){
this.log('componentWillUpdage')
  }

  render() {
    this.log('render')
    return (
      <div className="app">
        {movies.map((movie, index) => {
          return <Movie key={index} title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }

  componentDidUpdate(){
this.log('componentDidUpdate')
  }

  componentDidMount()
  {
    this.log('componentDidMout')
  }

  log(str){
    console.log(str)
  }
}

export default App;
