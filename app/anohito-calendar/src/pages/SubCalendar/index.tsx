import { FC, useEffect, useState, useLayoutEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import './style.css';

type tempType = {
  title: string;
  url: string;
}

export const SubCalendar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as tempType;

  // let calendarTitle = title;
  // let calendarLink = url;

  const [calendarTitle, setCalendarTitle] = useState('');
  const [calendarLink, setCalendarLink] = useState('');


  // useLayoutEffect(() => {
  //   // 必要な情報の取得
  //   artistInfo.artistInfo.forEach((obj: any) => {
  //     if (obj["calendar"]["link_name"] == artistName) {
  //       setCalendarTitle(obj["calendar"]["calendar_title"]);
  //       setCalendarLink(obj["calendar"]["calendar_link"]);
  //       // calendarTitle = obj["calendar"]["calendar_title"];
  //       // calendarLink = obj["calendar"]["calendar_link"];
  //     }
  //   });
  // }, []);


  useEffect(() => {
    if (state != null) {
      setCalendarTitle(state.title);
      setCalendarLink(state.url);
    } else {
      // titleとurlが取得できなかった場合は404へ
      navigate("/404");
    }
  }, []);

  return (
    <>
      <div className="sub-calendar wrapper">
        <h2 className="red-word" id="sub-calendar-title">
          {calendarTitle}
        </h2>
        <div className="sub-calendar-inner">
          {/*
          <iframe
            src={calendarLink}
            style={{ borderWidth: 0 }}
            loading='lazy'
            scrolling="no"
          />
          */}
          <div dangerouslySetInnerHTML={{ __html: `<iframe src="${calendarLink}" scrolling="no"/>` }} />;
        </div>

        <div className="color__list">
          <h3>かれんだー分類</h3>
          <ul>
            <li>
              <div className="color__list-box color__list1"></div>
              <p>CD・DVD関連</p>
            </li>
            <li>
              <div className="color__list-box color__list2"></div>
              <p>グッズ関連</p>
            </li>
            <li>
              <div className="color__list-box color__list3"></div>
              <p>ライブ・チケット</p>
            </li>
            <li>
              <div className="color__list-box color__list4"></div>
              <p>生放送</p>
            </li>
            <li>
              <div className="color__list-box color__list5"></div>
              <p>動画投稿</p>
            </li>
            <li>
              <div className="color__list-box color__list6"></div>
              <p>イベント予定</p>
            </li>
            <li>
              <div className="color__list-box color__list7"></div>
              <p>テレビ出演</p>
            </li>
            <li>
              <div className="color__list-box color__list8"></div>
              <p>その他</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
