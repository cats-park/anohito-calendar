import { FC } from "react";
import {  NavLink } from 'react-router-dom';


import { ArtistType } from "../../types/artist";


export const ArtistCard: FC<ArtistType> = (props) => {
  const {name, image, hpLink, youtubeLink, niconicoLink, twitterLink} = props;

  return (
    <>
      <div className="artist__list__block">
        <a href={hpLink} className="artist__list__block-hp" target="_blank">
          <img src={image} alt="" className="artist__list__block__profileimg ar_soraru" />
        </a>
        <div className="artist__list__block__detail">
          <h3>{name}</h3>
          <div className="artist__list__block__detail__set">
            <a href={youtubeLink} target="_blank"><i className="fab fa-youtube"></i></a>
            <a href={niconicoLink} target="_blank"><img src="/img/nc181450.png" alt="ニコニコ動画" className="niconico-tv" /></a>
            <a href={twitterLink} target="_blank"><i className="fab fa-twitter"></i></a>
            <NavLink to="/calendar"><i className="fas fa-calendar-alt"></i></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}