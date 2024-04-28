import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomeScreen from './pages/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
