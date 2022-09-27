import React from "react"

export const Howto = () => {
  return (
    <>
      <div className="howto wrapper">
        <h2>使い方（スマホ）</h2>
        <ol className="wrapper">
          <li>
            <div className="howto-inner">
              <p>
                ホーム画面に追加したいかれんだーのページを開き、
                下部の「共有」アイコンから「ホーム画面に追加」を選択する。
              </p>
              <div className="howto__photo1">
                <img src="/img/howto-phto1.png" alt="" />
                <img src="/img/howto-phto2.png" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="howto-inner">
              <p>
                ホームに追加画面で「追加」を選択することで
                ホーム画面上にかれんだーのページのリンクアイコンを追加できます。
                リンクアイコンをタップすることでかれんだーに直接アクセスできます。
              </p>
              <div className="howto__photo2">
                <img src="/img/howto-phto3.png" alt="" />
                <img src="/img/howto-phto4.png" alt="" />
                <img src="/img/howto-phto5.png" alt="" className="howto__photo2-img_last" />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  )
}