import React, { forwardRef, useRef } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
// import '../App.css'

import './style.css';

type headerType = {
  isTitleRed:boolean;
}


export const Header = forwardRef<HTMLHeadingElement, headerType>((props, ref) => {
  const isTitleRed = props.isTitleRed;

  return (
    <>
      <header>
        <div className='header-inner wrapper'>
          <NavLink to="/" ><h1 ref={ref} className={isTitleRed ? "red-word" : ""}>あの人かれんだー</h1></NavLink>
          <nav className='menu' id='menu'>
            <ul>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? "red-word" : "")}>About</NavLink></li>
              <li><NavLink to="/news" className={({ isActive }) => (isActive ? "red-word" : "")}>News</NavLink></li>
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
});
