import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate, Link } from 'react-router-dom';

import { SubPageTopImage } from "../../components/ui-parts/SubPageTopImage";

import artistInfo from "/public/artist-info.json";

import './style.css';



export const Calendar = () => {
  return (
    <>
      {/* PAGE-TOP */}
      <SubPageTopImage
        name="CALENDER"
        image="img/Yuu171226IMGL0015_TP_V.jpg"
      />

      <main className="calendar">
        <div className="calendar__comments wrapper">
          <h2>かれんだーリスト</h2>
          <p>
            下記のパネルから各アーティストのかれんだーに遷移します。
          </p>
        </div>

        <div className="calendar__list">
          <div className="calendar__list__block wrapper">
            <ul className="wrapper">
              {artistInfo.artistInfo.map((obj:any) => {
                return (
                  <NavLink
                    to={`/calendar/sub-calendar/${obj.calendar.link_name}`}
                    state={{ title:obj.calendar.calendar_title, url: obj.calendar.calendar_link }}
                  >
                    <li>{obj.name}</li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};
