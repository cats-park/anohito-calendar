

const result = document.getElementById("result");

const makeBtn = document.getElementById("make_btn");


makeBtn.addEventListener("click", function() {
    let title = document.getElementById("title");
    let url = document.getElementById("url");

    if(title.value !="" && url.value !="") {
        title.style.border = "none";
        url.style.border = "none";

        makeFormat(title.value, url.value);
    }else {
        // タイトルが未入力の場合赤枠で囲む
        if(title.value =="") {
            title.style.border = "solid 3px red";
        }
        // URLが未入力の場合赤枠で囲む
        if(url.value =="") {
            url.style.border = "solid 3px red";
        }

    }
});



let makeFormat = (title, url) => {
    // URLに含まれている媒体名を変数に代入する
    let medium = "";
    // youtube
    if(url.indexOf("youtube") != -1) {medium = "YouTube"}
    // niconico
    if(url.indexOf("nicovideo") != -1) {medium = "niconico"}
    // ツイキャス
    if(url.indexOf("twitcasting") != -1) {medium = "ツイキャス"}
    // OPENREC
    if(url.indexOf("openrec") != -1) {medium = "OPENREC"}
    // mildom
    if(url.indexOf("mildom") != -1) {medium = "mildom"}

    result.insertAdjacentHTML("afterbegin",
    `
    <p>【${medium}】${title}</p>
    `
    );
    result.insertAdjacentHTML("beforeend",
    `
    <div>
        <p>${medium}↓</p>
        <p>URL：${url}</p>
    </div>
    `
    );
}
