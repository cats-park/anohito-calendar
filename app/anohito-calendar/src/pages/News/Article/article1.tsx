
import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';


import { Header } from '/src/components/layouts/header'
import { Footer } from '/src/components/layouts/footer';

export const Article1 = () => {
  return (
    <>
      <section className="article1 wrapper">
        <div className="article1__comments">
          <h2>iOS15以降のSafariでかれんだーが表示されない事象について</h2>
          <p>
            2022年5月4日時点でiOS15でかれんだーが表示できない事象が発生しています。<br />
            以下の方法で表示できるようになります。
          </p>
        </div>
        <ol className="article1__countermeasure">
          <li>
            <div className="article1__countermeasure--inner">
              <h3>方法1.
                <p>
                  ホーム画面→「設定」→「Safari」→「プライバシーとセキュリティ」→「サイト越えトラッキングを防ぐ」を無効にする。
                </p>
              </h3>
              <div className="article1__countermeasure--photo1">
                <img src="/img/news/article/1/article1-1.png" alt="image1" />
              </div>
            </div>
          </li>
          <li>
            <div className="article1__countermeasure--inner">
              <h3>方法2.
                <p>
                  Safari以外のブラウザを使用する。
                </p>
              </h3>

            </div>
          </li>
        </ol>
      </section>
    </>
  );
};


