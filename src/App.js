import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
