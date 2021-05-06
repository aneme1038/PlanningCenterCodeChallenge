import './App.css';
import AddMovie from './components/AddMovie.js';
import MovieList from './components/MovieList.js';

function App() {
  return (
    <div className="App">
      <header className="container header">
        <div className="row">
          <h1 className="hdrHead">Screen it</h1>
        </div>
      </header>
      <AddMovie />
      <MovieList />
    </div>
  );
}

export default App;
