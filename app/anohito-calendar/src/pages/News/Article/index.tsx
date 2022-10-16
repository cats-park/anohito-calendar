import { FC, useEffect, useState } from "react";

import { useNavigate, useLocation, NavLink } from "react-router-dom";

import { Article1 } from "./article1";

import { Header } from "/src/components/layouts/header";
import { Footer } from "/src/components/layouts/footer";

import './style.css';


export const Article: FC = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [articleId, setArticleId] = useState(0);


  console.log(location.pathname);


  const getArticle = (id: number) => {
    console.log('id is ' + id)
    if (id == 1) {
      return <Article1 />;
    // } else if (id ==2) {
    //   // when id is 2.
    } else {
      // error
      console.log('Invalid article id.');
      navigate("/404");
    }
  };

  useEffect(() => {
    if (location != null) {
      setArticleId(Number(location.pathname.split('/').slice(-1)[0]));
      if (articleId != 0) {
        getArticle(articleId);
      }
    } else {
      // error
      console.log('Invalid article id');
      navigate("/404");
    }
  }, [articleId]);


  return (
    <>
      <Header />
      {/* content */}
      <div className="article wrapper">
        {getArticle(articleId)}
        {/* 戻るボタン */}
        <NavLink to="/news" className="article__back-btn" >戻る</NavLink>
      </div>
      <Footer />
    </>
  );
}