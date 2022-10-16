import { FC } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';


import { ThanksArtist } from "../../types/thanksArtist";


export const ThanksArtistCard: FC<ThanksArtist> = props => {
  const {name, twitterId, twitterLink} = props;

  return (
    <>
      <div className="thanks__list__block">
            <h3 className="thanks__list__block-rtitle">{name}</h3>
            <div className="thanks__list__block-inner">
              <p>Twitter：<a href={twitterLink} target="_blank">{twitterId}</a></p>
              <p>Twitterなどの画像を多数お借りいたしました。ありがとうございます。</p>
            </div>
          </div>
    </>
  )
}