import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie.js';

function App() {
  return (
    <div className="App">
      <header className="container header">
        <div className="row">
          <h1 className="hdrHead">Screen it</h1>
        </div>
      </header>
      <AddMovie />
    </div>
  );
}

export default App;
