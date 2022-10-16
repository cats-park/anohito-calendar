import { FC, useEffect, useRef, useState, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Header } from "/src/components/layouts/header";
import { Footer } from "/src/components/layouts/footer";

import { Progressbar } from "/src/components/ui-elements/Progressbar";

import './style.css';

type subCalendarState = {
  title: string;
  url: string;
}

export const SubCalendar:FC = () => {
  const TITLE: string = 'あの人かれんだー';
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as subCalendarState;
  let headerRef = useRef<HTMLHeadingElement>(null);
  let progressBarRef = useRef<HTMLDivElement>(null);
  let calendarRef = useRef<HTMLDivElement>(null);

  let headerHeight = 0;

  const [calendarTitle, setCalendarTitle] = useState('');
  const [calendarLink, setCalendarLink] = useState('');

  const changeTitle = () => {
    let scrollAmount = window.pageYOffset;
    if (headerHeight < scrollAmount) {
      // 文字変更
      if (headerRef.current != null && headerRef.current.textContent != calendarTitle) {
        headerRef.current.textContent = calendarTitle;
        headerRef.current.classList.add('red-word');
      }
    } else {
      if (headerRef.current != null && headerRef.current.textContent == calendarTitle) {
        headerRef.current.textContent = TITLE;
        headerRef.current.classList.remove('red-word');
      }
    }
  }

  const getHeaderHeight = () => {
    // console.log(headerRef.current?.clientHeight);
    if (window.matchMedia("(min-width: 960px)").matches) {
      return 85;
    } else if (window.matchMedia("(min-width: 600px)").matches) {
      return 65;
    } else {
      return 55;
    }
  };

  useEffect(() => {
    // ページ遷移時に一番上に移動する
    window.scroll({ top: 0});
  });

  useEffect(() => {
    // state == null -> urlが間違っているから404へ
    if (state != null) {
      setCalendarTitle(state.title);
      setCalendarLink(state.url);
    } else {
      navigate("/404");
    }
    // headerの高さ取得
    headerHeight = getHeaderHeight();

    // スクロールイベントの追加
    window.addEventListener('scroll', changeTitle);

    document.querySelector('iframe')?.addEventListener('load', () => {
      if (progressBarRef.current != null) {
        progressBarRef.current.style.display = 'none';
      }
      if (calendarRef.current != null) {
        calendarRef.current.style.display = 'block';
      }
    });

    // remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', changeTitle);
    };
  }, [calendarTitle]);

  return (
    <>
      <Header ref={headerRef} />
      <div className="sub-calendar wrapper">
        <h2 className="red-word" id="sub-calendar-title">
          {calendarTitle}
        </h2>
        <div className="sub-calendar-inner">
          <div
            className="sub-calendar-inner__progressbar"
            ref={progressBarRef}
          >
            <Progressbar />
          </div>
          <div
            className="sub-calendar-inner__content"
            ref={calendarRef}
            dangerouslySetInnerHTML={{ __html: `<iframe  src="${calendarLink}" scrolling="no"/>` }}
          ></div>
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
      <Footer />
    </>
  );
};
