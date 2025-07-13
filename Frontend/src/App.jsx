import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows';
import Footer from './components/Footer';
import { useState } from 'react';
import SignIn from './Pages/SignIn';



export default function App() {
const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <BrowserRouter>

     <NavBar user={user} onLogout={() => setUser(null)} />
           <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/signin" element={<SignIn onLogin={setUser} />} />
      </Routes>
      </BrowserRouter>
        <Footer />
      </div>
  );
}
