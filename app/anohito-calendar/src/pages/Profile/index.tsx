import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import artistInfo from '/public/artist-info.json';
import { ArtistType } from "../../types/artist";

import { SubPageTopImage } from '../../components/ui-parts/SubPageTopImage';

import { Header } from '/src/components/layouts/header'
import { Footer } from '/src/components/layouts/footer';

import { ArtistCard } from "../../components/ui-parts/ArtistCard";

export const Profile = () => {
  return (
    <>
      <Header />
      {/* PAGE-TOP */}
      <SubPageTopImage
        name='PROFILE'
        image='img/INA85_recyoukonndensam_TP_V.jpg' />

      {/* artist */}
      <div className="artist wrapper">
        <h2>アーティスト</h2>
        <div className="artist__list">
          {artistInfo.artistInfo.map((i: ArtistType) => (
            <div className="artist__list__block" key={i.name}>
              <a href={i.hpLink} className="artist__list__block-hp" target="_blank">
                <img src={i.image} alt="" className="artist__list__block__profileimg ar_soraru" />
              </a>
              <div className="artist__list__block__detail">
                <h3>{i.name}</h3>
                <div className="artist__list__block__detail__set">
                  <a href={i.youtubeLink} target="_blank"><i className="fab fa-youtube"></i></a>
                  <a href={i.niconicoLink} target="_blank"><img src="/img/nc181450.png" alt="ニコニコ動画" className="niconico-tv" /></a>
                  <a href={i.twitterLink} target="_blank"><i className="fab fa-twitter"></i></a>
                  <NavLink to="/calendar"><i className="fas fa-calendar-alt"></i></NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

