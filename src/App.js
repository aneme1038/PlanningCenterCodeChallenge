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
      rate: ''
    }
    this.addToMovieList = this.addToMovieList.bind(this);
  }

  addToMovieList(newMovie) {
    
    console.log(newMovie);
    //create new array based off new movie and current movie list
    const newMovieList = [newMovie, ...this.state.movieList]
    console.log(newMovieList);
    //    this.props.movieList = newMovieList;
    //set the state
    this.setState({
        movieList: newMovieList,
        movieName: '',
        movieCategory: '',
        rate: ''
    })
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
          handleAdd={this.addToMovieList} 
        />
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default App;
