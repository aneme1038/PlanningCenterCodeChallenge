import './App.css';
import React from 'react';
import AddMovie from './components/AddMovie.js';
import MovieList from './components/MovieList.js';
// require('dotenv');
// const APIKEY = process.env.APIKEY;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movieList: [],
      movieName: '',
      movieCategory: '',
      rate: '',
      abbreviation: '',
      index: ''
    }
    this.addToMovieList = this.addToMovieList.bind(this);
    this.editMovie = this.editMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.searchForMovie = this.searchForMovie.bind(this);
    this.showResults = this.showResults.bind(this);
  }
  async searchForMovie(movie){
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=97bf20a1&t=${movie}`)
    .then(res => res.json())
    .then(
      (result) => {
        return true
      },
      (error) => {
        return false
      }
    )
  }

  async showResults(movie) {
    
  }
  addToMovieList(newMovie) {
    //create new array based off new movie and current movie list
    const newMovieList = [newMovie, ...this.state.movieList]
    //    this.props.movieList = newMovieList;
    //set the state
    this.setState({
        movieList: newMovieList,
        movieName: '',
        movieCategory: '',
        rate: '',
        abbreviation: ''
    })
  }
  editMovie(index) {
    
  }
  deleteMovie(index) {
    console.log(index);
  //   const movies = this.state.movieList.filter(movie => console.log(movie))
  //   this.setState({
  //     movieList: movies
  //   })
  }
 
  render(){
    return (
      <div className="App">
        <header className="container header">
          <div className="row">
            <h1 className="hdrHead">Screen it</h1>
          </div>
        </header>
        <AddMovie 
          movieList={this.state.movieList} 
          movieName={this.state.movieName} 
          movieCategory={this.state.movieCategory} 
          rate={this.state.rate}
          abbreviation={this.state.abbreviation}
          handleAdd={this.addToMovieList}
          searchMovie={this.searchForMovie}
        />
        <MovieList 
          movieList={this.state.movieList} 
          editMovie={this.editMovie} 
          deleteMovie={this.deleteMovie}
          index={this.state.index}
          showResults={this.showResults}
        />
      </div>
    );
  }
}

export default App;
