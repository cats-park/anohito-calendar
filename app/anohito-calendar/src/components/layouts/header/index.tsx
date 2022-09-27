import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
// import '../App.css'

import './style.css';


export const Header = () => {

  return (
    <>
    <header>
      <div className='header-inner wrapper'>
        <h1><NavLink to="/" className="red-word">あの人かれんだー</NavLink></h1>
        <nav className='menu' id='menu'>
          <ul>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "red-word" : "")}>About</NavLink></li>
            <li><NavLink to="/profile" className={({ isActive }) => (isActive ? "red-word" : "")}>Profile</NavLink></li>
            <li><NavLink to="/calendar" className={({ isActive }) => (isActive ? "red-word" : "")}>Calendar</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "red-word" : "")}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="empty"></div>
    </>
  );
};
