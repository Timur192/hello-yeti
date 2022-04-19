import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AppBar from './navmenu/AppBar'

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';

function App() {
  return (
  <>
    <div className="App">
      <header className="App-header">
        <AppBar />

        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Blog</Link>
      </header>
    </div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Blogpage />} />
    </Routes>
  </>
  );
}

export default App;
