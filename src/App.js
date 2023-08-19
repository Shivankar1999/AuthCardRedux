// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { CheckDetails } from './pages/CheckDetails';

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {user === {} ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <>
            {' '}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<CheckDetails />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
