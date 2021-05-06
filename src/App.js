import './App.css';
import React from 'react';
import AddMovie from './components/AddMovie.js';
import MovieList from './components/MovieList.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movieList: []
    }
  }
 

  render(){
    return (
      <div className="App">
        <header className="container header">
          <div className="row">
            <h1 className="hdrHead">Screen it</h1>
          </div>
        </header>
        <AddMovie movieList={this.state.movieList} handleAdd={this.addToMovieList}/>
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default App;
