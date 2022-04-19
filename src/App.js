import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
