import './App.css';
import React from 'react';
import Title from './Title';
// import POPOSList from './POPOSList';
// import Footer from './Footer';
// import About from './About';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
   
    </div>
  );
}

export default App;
