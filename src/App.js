import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Index } from './pages/Index';
import { About } from './pages/About';

function App() {
  return (

    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about/'>About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about/" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
