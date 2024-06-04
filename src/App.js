// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import MovieSearch from './components/MovieSearch';
import './App.css';
import './components/Login.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<MovieSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;