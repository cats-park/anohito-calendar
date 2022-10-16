import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { Howto } from "/src/components/layouts/Howto";
import {SubPageTopImage} from '/src/components/ui-parts/SubPageTopImage';

import { Header } from '/src/components/layouts/header'
import { Footer } from '/src/components/layouts/footer';


import './style.css'

export const About = () => {

  const MY_TWITTER_LINK:string = 'https://twitter.com/anohito_ca';

  return (
    <>
      <Header />
      {/* PAGE-TOP */}
      <SubPageTopImage
        name='ABOUT'
        image='img/AME20181113A002_TP_V.jpg' />

      {/* DESCRIPTION */}
      <div className="description wrapper">
        <h2>本サイトについて</h2>
        <p>
          「どんなに忙しくても、ここなら一発でわかる！」というのをコンセプトに本サイトは歌い手に関する予定をかれんだー上にまとめ、公開しています。
        </p>
        <p>どんなに些細なことでも至らぬ点などがあったら<a href={MY_TWITTER_LINK} className="red-word" target="_blank">DM</a>や<NavLink to="/contact" className="red-word">コンタクトフォーム</NavLink>より連絡ください!!!</p>
      </div>

      {/* HOWTO */}
      <Howto />

      <Footer />
    </>
  );
}