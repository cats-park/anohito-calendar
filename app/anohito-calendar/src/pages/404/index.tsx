import React from "react";
import { Link } from "react-router-dom";

import { Header } from "/src/components/layouts/Header";
import { Footer } from "/src/components/layouts/Footer";

import img from "/public/img/404/shocked_woman_mono.png";

import './style.css';


export const Error = () => {


  return (
    <>
      <Header />
      <div className="error wrapper">
        <h2 className="error-title">404 NOT FOUND</h2>
        <img src={img} className="error-img" alt="" />
        <p>
          申し訳ございませんが、アクセスいただいたURLが見つかりません。<br />
          Topから再度アクセスしてください。
        </p>
        <button><Link to="/">Topに戻る</Link></button>

      </div>
      <Footer />
    </>
  );
}