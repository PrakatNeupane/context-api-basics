import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Index } from './pages/Index';
import { About } from './pages/About';
import { UserContext } from './UserContext';

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
      <UserContext.Provider value="hello from context">
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
