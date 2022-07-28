import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Movies from './routes/Movies';
import Search from './routes/Search';
import { GlobalStyles } from './components/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar/>
      < BrowserRouter>
          <Routes>
            <Route path="/" element={< Home />}></Route>
            <Route path="/movies" element={< Movies />}></Route>
            < Route path="/search" element={< Search />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
