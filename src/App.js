import React from 'react';
import './App.css';
import About from './components/About';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Ashley<br />Liu</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/about">About</Link>
            <a href="mailto:awl77@cornell.edu">Contact</a>
          </nav>
        </header>

        <Routes>
          <Route path="/about" element={<About />} />
          {/* Add other routes like Home, Projects, etc. */}
          <Route path="/experiences" element={<Experiences />} />
        </Routes>

        <Footer />
      </div>
    </Router >
  );
}

export default App;
