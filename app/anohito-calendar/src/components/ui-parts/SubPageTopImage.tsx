import { FC } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import './SubPageTopImage.css'

// TODO: 型宣言をどうするか
type tempType = {
  name: string;
  image: string;  // MEMO: public以降のパス名
}

export const SubPageTopImage: FC<tempType> = props => {
  const { name, image } = props;

  return (
    <>
      <div className="subpage-top">
        <img src={image} alt="" />
        <strong>{name}</strong>
      </div>
    </>
  )
}