import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';


import { Header } from '/src/components/layouts/header'
import { Footer } from '/src/components/layouts/footer';

import artistInfo from '/public/artist-info.json';
import thanksArtistInfo from '/public/thanks-artist-info.json';

import { ArtistType } from "/src/types/artist";
import { ThanksArtist } from "/src/types/thanksArtist";

import { ArtistCard } from "/src/components/ui-parts/ArtistCard";
import { ThanksArtistCard } from "/src/components/ui-parts/ThanksArtistCard";

import { Howto } from "/src/components/layouts/Howto";

import './style.css';

export const Home = () => {

  return (
    <>
      <Header isTitleRed={true} />
      {/* request */}
      <div className="request wrapper" id="request">
        <h2>お願い</h2>
        <p>本サイトでは様々なアーティストのスケジュールをまとめています。</p>
        <p>情報を逃さないために毎日欠かさずチェックしてくれたら幸いです。</p>
        <p>
          最後に<NavLink to="/about" className="red-word">こちら</NavLink>から使用方法をご確認ください！
        </p>
      </div>
      {/* quiz */}
      <div className="quiz wrapper">
        <h2>ミニゲーム</h2>
        <h3>〜歌い手当てゲーム〜</h3>
        <NavLink to='/game/image-quiz' className="quiz-btn">スタート！</NavLink>
        <h3>〜あの人を探せ！〜</h3>
        <NavLink to='/game/find-guys' className="quiz-btn">スタート！</NavLink>
      </div>
      {/* artist */}
      <Artist />
      {/* howto */}
      <Howto />
      {/* thanks */}
      <Thanks />
      {/* other */}
      <Other />
      <Footer />
    </>
  );
}

const Artist = () => {
  return (
    <>
      <div className="artist wrapper">
        <h2>アーティスト</h2>
        <div className="artist__list">
          {artistInfo.artistInfo.map((i: ArtistType) => (
            <ArtistCard
              key={i.name}
              name={i.name}
              image={i.image}
              hpLink={i.hpLink}
              youtubeLink={i.youtubeLink}
              niconicoLink={i.niconicoLink}
              twitterLink={i.twitterLink}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const Thanks = () => {
  return (
    <>
      <div className="thanks wrapper">
        <h2>謝礼</h2>
        <p>
          本サイトで使用しているイラスト・画像は以下の方からお借りいたしました。
          感謝をこめ、以下に名前を列挙いたします。
        </p>
        <p>万が一不適切な利用がございましたら、<a href="contact.html" className="red-word">こちら</a>からご連絡ください。</p>
        <div className="thanks__list">
          {thanksArtistInfo.thanksArtistInfo.map((i: ThanksArtist) => (
            <ThanksArtistCard
              key={i.name}
              name={i.name}
              twitterId={i.twitterId}
              twitterLink={i.twitterLink}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const Other = () => {
  return (
    <>
      <div className="other wrapper">
        <h2>その他</h2>
        <ul className="wrapper">
          <li>
            <p><a href="other">2022/5/4iOS15以降でカレンダーが表示されない</a></p>
          </li>
        </ul>
      </div>
    </>
  )
}