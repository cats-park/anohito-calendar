import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';

import { Home } from './Home';
import { Profile } from './Profile';
import { News } from './News';
import { Article } from './News/Article';
import { About } from './About';
import { Calendar } from './Calendar';
import { Contact } from './Contact';
import { SubCalendar } from './SubCalendar';

import { FindGuys } from './game/FindGuys';
import { ImageQuiz } from './game/ImageQuiz';

import { Error } from './404';


export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news'>
              <Route index element={<News />} />
              <Route path='/news/article/:articleId' element={<Article />} />
            </Route>
            <Route path='/calendar'>
              <Route index element={<Calendar /> }/>
              <Route path='/calendar/sub-calendar/:artistName' element={<SubCalendar />} />
            </Route>
          </Route>
          <Route path='/game' >
            <Route path='find-guys' element={<FindGuys />} />
            <Route path='image-quiz' element={<ImageQuiz />} />
          </Route>
          {/* error */}
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};