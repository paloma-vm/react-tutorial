// src/Header.js
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Header() {
  return (
    <div className="Header">
      <header>
        <h1>SFPOPOS</h1>
        <div className="Header-Subtitle">San Francisco Privately Owned Public Open Spaces</div>

        <div className='a'>
        <NavLink 
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                to="/">List</NavLink>
        <NavLink 
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                to="/about">About</NavLink>
        <RandomSpace />
        </div>

      </header>
    </div>
  )
}

export default Header