
import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { SubPageTopImage } from '/src/components/ui-parts/SubPageTopImage';

import { Header } from '/src/components/layouts/header'
import { Footer } from '/src/components/layouts/footer';


import './style.css'

export const News = () => {

  return (
    <>
      <Header />
      {/* PAGE-TOP */}
      <SubPageTopImage
        name='NEWS'
        image='img/news/PAK153130225.png' />

      {/* DESCRIPTION */}
      <div className="news wrapper">
        <h2>おしらせ</h2>
        <ul className="wrapper">
          <li>
            {/* <p><NavLink to="/news/article/1">2022/5/4iOS15以降でカレンダーが表示されない</NavLink></p> */}
            <NavLink to="/news/article/1">2022/5/4iOS15以降でカレンダーが表示されない</NavLink>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}