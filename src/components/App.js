import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer
        name="Paloma Valdez-Marsh"
        copyright_year="copyright 2023"
      />
    </div>
  );
}

export default App;
