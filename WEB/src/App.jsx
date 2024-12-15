import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import CheckServerStatus from './components/CheckServerStatus';

function App() {
  return (
    <Router>
      <div>
        <div className="relative z-0 bg-primary">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkstatus" element={<CheckServerStatus />} />
          <Route path="/stats" element={<Stats />} />
          {/* Autres routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
