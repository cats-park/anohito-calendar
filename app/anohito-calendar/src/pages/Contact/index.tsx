import React from "react";

import { SubPageTopImage } from '../../components/ui-parts/SubPageTopImage';

import { Header } from '/src/components/layouts/header'
import { Footer } from '/src/components/layouts/footer';

import './style.css';

export const Contact = () => {
  const googleformButton = () => {
    window.open('https://forms.gle/X6XUXVLgJqF1Y9mC6','_blank')
  }
  return(
    <>
      <Header />
      {/* PAGE-TOP */}
      <SubPageTopImage
        name='CONTACT'
        image='img/oldtimer-4777978_1920.jpg' />

      {/* googleform */}
      <div className="googleforms wrapper">
          <p>
              お問い合わせ（ご指摘・アドバイス・イラストの募集など）ありましたら、下記の
              Googleフォームよりご連絡ください！！！
          </p>
          <p className="googleforms__arrow">
              ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
              ⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩⇩
          </p>
          <button type="button" onClick={googleformButton}>Googleフォーム</button>
      </div>
      <Footer />
    </>
  );
}