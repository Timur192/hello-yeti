import './App.css';
import Component from './Component';
import AppBar from './AppBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar />
        <Component />
      </header>
    </div>
  );
}

export default App;
