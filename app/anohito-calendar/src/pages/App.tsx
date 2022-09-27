import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
// import '../App.css'

import { Home } from './Home';
import { Profile } from './Profile';
import { About } from './About';
import { Calendar } from './Calendar';
import { Contact } from './Contact';
import { Error } from './404';
import { Header} from '../components/layouts/header'
import { Footer } from '../components/layouts/footer';

import { SubCalendar } from './SubCalendar';

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* TODO: quizの時はheaderも変わるからroutesでやる */}
        </Routes>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='calendar/sub-calendar/:artistName' element={<SubCalendar />} />
            {/* error */}
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};
