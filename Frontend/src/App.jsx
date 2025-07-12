import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>

     <NavBar/>
           <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
      </BrowserRouter>
        <Footer />
      </div>
  );
}
