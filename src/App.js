import './App.css';
import React from 'react';
import AddMovie from './components/AddMovie.js';
import MovieList from './components/MovieList.js';

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
  }

  componentDidMount(){
    fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      }
    )
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
        />
        <MovieList 
          movieList={this.state.movieList} 
          editMovie={this.editMovie} 
          deleteMovie={this.deleteMovie}
          index={this.state.index}

        />
      </div>
    );
  }
}

export default App;
