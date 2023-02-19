import './App.css';
import React from 'react';
import Title from './Title/Title';

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
