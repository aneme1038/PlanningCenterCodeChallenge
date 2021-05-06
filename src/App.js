import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Screen it</h1>
      </header>
      <AddMovie />
    </div>
  );
}

export default App;
