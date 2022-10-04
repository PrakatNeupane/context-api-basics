import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Index } from './pages/Index';
import { About } from './pages/About';
import { UserContext } from './UserContext';

function App() {
  const [value, setValue] = useState('hello from context')
  return (
    <div>
      <UserContext.Provider value={{ value, setValue }}>
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
            <Route path="/" exact element={<Index />} />
            <Route path="/about/" element={<About />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>

    </div >

  );
}

export default App;
