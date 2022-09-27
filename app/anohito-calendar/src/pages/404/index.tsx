import React from "react";
import { Link } from "react-router-dom";


export const Error = () => {
  return (
    <>
      <h2>404</h2>
      <p>Sorry, the page you're looking con not found.</p>
      <Link to="/">Topに戻る</Link>
    </>
  );
}