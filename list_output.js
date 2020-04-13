
//連想配列にライブ情報を入れる
/*日程が過ぎだものは手動でコメントアウトする消しはしない
処理が重くなるため*/
const infos = [
    {
        no: "1",
        name: "浦島坂船 Spring Tour2020",
        location: "群馬",
        date: "2020/5/9",
        price: "5500",
        open: "17:15",
        start: "18:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "DISK GARAGE",
        contactTM: "050-5533-0888",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "2",
        name: "XYZ TOUR 2020-DJ Style-",
        location: "宮城",
        date: "2020/5/2",
        price: "5000",
        open: "17:00",
        start: "18:00",
        artist: "あらき/un:c/KOOL/kradness/しゅーず/SILVANA/めいちゃん/luz",
        contactName: "ニュース・プロモーション",
        contactTM: "022-266-7555",
        rink: "https://xyztour.jp/",
        other: ""
    },
    {
        no: "3",
        name: "XYZ TOUR 2020-DJ Style-",
        location: "赤羽",
        date: "3/7→中止",
        price: "5000",
        open: "17:30",
        start: "18:00",
        artist: "あらき/un:c/KOOL/kradness/めいちゃん/luz",
        contactName: "DISK GARAGE",
        contactTM: "050-5533-0888",
        rink: "https://xyztour.jp/",
        other: ""
    },
    {
        no: "4",
        name: "浦島坂船 Spring Tour2020",
        location: "大阪",
        date: "2020/4/8",
        price: "6000",
        open: "17:30",
        start: "18:30",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "キョードーインフォメーション",
        contactTM: "0570-200-888",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "5",
        name: "浦島坂船 Spring Tour2020",
        location: "大阪",
        date: "2020/5/11",
        price: "6000",
        open: "17:30",
        start: "18:30",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "キョードーインフォメーション",
        contactTM: "0570-200-888",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "6",
        name: "luz MEMBERS MEETING Vol.4 昼の部",
        location: "東京",
        date: "2020/4/29",
        price: "4500",
        open: "13:30",
        start: "14:00",
        artist: "luz",
        contactName: "",
        contactTM: "",
        rink: "https://luz-members.com/",
        other: ""
    },
    {
        no: "7",
        name: "luz MEMBERS MEETING Vol.4 夜の部",
        location: "東京",
        date: "2020/4/29",
        price: "4500",
        open: "17:30",
        start: "18:00",
        artist: "luz",
        contactName: "",
        contactTM: "",
        rink: "https://luz-members.com/",
        other: ""
    },
    {
        no: "8",
        name: "浦島坂船 Spring Tour2020",
        location: "岩手",
        date: "2020/5/14",
        price: "5500",
        open: "17:45",
        start: "18:30",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "キョードー東北",
        contactTM: "022-217-7788",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "9",
        name: "浦島坂船 Spring Tour2020",
        location: "青森",
        date: "2020/5/16",
        price: "5500",
        open: "16:15",
        start: "17:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "キョードー東北",
        contactTM: "022-217-7788",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "10",
        name: "XYZ TOUR 2020-DJ Style-",
        location: "広島",
        date: "2020/5/14",
        price: "5000",
        open: "17:45",
        start: "18:30",
        artist: "あらき/un:c/KOOL/kradness/めいちゃん/luz",
        contactName: "夢番地広島",
        contactTM: "082-249-3571",
        rink: "https://xyztour.jp/",
        other: ""
    },
    {
        no: "11",
        name: "浦島坂船 Spring Tour2020",
        location: "愛知",
        date: "2020/6/12",
        price: "5500",
        open: "17:45",
        start: "18:30",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "サンデーフォークプロモーション",
        contactTM: "052-320-9100",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "12",
        name: "XYZ TOUR 2020-DJ Style-",
        location: "静岡",
        date: "2020/5/22",
        price: "5000",
        open: "18:00",
        start: "18:30",
        artist: "あらき/un:c/KOOL/センラ/めいちゃん/luz",
        contactName: "サンデーフォークプロモーション静岡",
        contactTM: "054-284-9999",
        rink: "https://xyztour.jp/",
        other: ""
    },
    {
        no: "13",
        name: "ひきこもりでもLIVEがしたい",
        location: "東京",
        date: "未定(3/31までに方針決定)",
        price: "6300",
        open: "16:00",
        start: "18:00",
        artist: "まふまふ",
        contactName: "DISK GARAGE",
        contactTM: "050-5533-0888",
        rink: "https://hikikomoridemo.jp/",
        other: "延期・中止(日程は未定)"
    },
    {
        no: "14",
        name: "ひきこもりでもフェスがしたい",
        location: "東京",
        date: "未定(3/31までに方針決定)",
        price: "6800",
        open: "14:00",
        start: "16:00",
        artist: "まふまふ/そらる/うらたぬき/隣の坂田/天月/luz/志麻/センラ/少年T/nqrse/あらき/un:c/めいちゃん/",
        contactName: "DISK GARAGE",
        contactTM: "050-5533-0888",
        rink: "https://hikikomoridemo.jp/",
        other: "延期・中止(日程は未定)"
    },
    {
        no: "15",
        name: "浦島坂船 Spring Tour2020",
        location: "千葉",
        date: "2020/3/30",
        price: "6000",
        open: "15:30",
        start: "17:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "DISK GARAGE",
        contactTM: "050-5533-0888",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "16",
        name: "浦島坂船 Spring Tour2020",
        location: "千葉",
        date: "2020/3/31",
        price: "6000",
        open: "13:30",
        start: "15:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "DISK GARAGE",
        contactTM: "050-5533-0888",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "17",
        name: "浦島坂船 Spring Tour2020",
        location: "山口",
        date: "2020/4/5",
        price: "5500",
        open: "16:30",
        start: "17:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "夢番地(広島)",
        contactTM: "082-231-3571",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "18",
        name: "浦島坂船 Spring Tour2020",
        location: "岡山",
        date: "2020/4/6",
        price: "5500",
        open: "17:30",
        start: "18:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "夢番地(岡山)",
        contactTM: "086-231-3531",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "19",
        name: "浦島坂船 Spring Tour2020",
        location: "長崎",
        date: "2020/4/11",
        price: "5500",
        open: "16:30",
        start: "17:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "キョードー西日本",
        contactTM: "0570-09-2424",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "20",
        name: "浦島坂船 Spring Tour2020",
        location: "佐賀",
        date: "2020/4/12",
        price: "5500",
        open: "16:30",
        start: "17:00",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "キョードー西日本",
        contactTM: "0570-09-2424",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    },
    {
        no: "21",
        name: "浦島坂船 Spring Tour2020",
        location: "沖縄",
        date: "2020/4/19",
        price: "5500",
        open: "15:00",
        start: "15:30",
        artist: "うらたぬき/となりの坂田/志麻/センラ",
        contactName: "PM AGENCY",
        contactTM: "098-898-1331",
        rink: "https://twitter.com/USSS_info/status/1217008487412068352?s=20",
        other: ""
    }
];
//その後の処理で公演情報を一覧で表示する処理を行う。
//公演日がtodayより前なら表示しない
/*配列の各要素であったら表示、なかったら項目(htmlの部分)も
表示しないようにする*/
/*出演者の項目でindexOfを使って検索し、含まれていたら
クラス名にアーティスト名を追加する処理をする
のちに、コロナで使った絞り込みを行うため*/

var target = document.getElementById("concert__list");

infos.forEach((info) => {
    //公演単位で<div>を作成する
    var className = `concert__list-inner-${info.no}`;
    target.insertAdjacentHTML('beforeend', `<div class='${className}' id='${className}'></div>`);

    var inner = document.getElementById(className);

    inner.insertAdjacentHTML('beforeend', `<h3 class="target__name">・${info.name}@${info.location}</h3>`);
    inner.insertAdjacentHTML('beforeend', `<p class="target__date">日程：${info.date}</p>`);
    inner.insertAdjacentHTML('beforeend', `<p class="target__price">料金：${info.price}円</p>`);
    inner.insertAdjacentHTML('beforeend', `<p class="target__open">開場/開演：${info.open}/${info.start}</p>`);
    inner.insertAdjacentHTML('beforeend', `<p class="target__artist">出演者：${info.artist}</p>`);
    //マストじゃないからなかったら表示しない
    if(info.contactName !== "" && info.contactTM !== "") {
        inner.insertAdjacentHTML('beforeend', `<p class="target__contact">お問い合わせ：${info.contactName}(${info.contactTM})</p>`);
    }
    inner.insertAdjacentHTML('beforeend', `<p class="target__rink">詳細は<a class="red-word" href="${info.rink}">こちら</a></p>`);
    //マストじゃないからなかったら表示しない
    if(info.other !== "") {
        inner.insertAdjacentHTML('beforeend', `<p class="target__other">その他：${info.other}</p>`);
    }
});


//
// const reset = document.getElementById("reset_btn");
// const sel = document.getElementById("sel_artist");
// const els = document.querySelectorAll('.target');
//
// //concert.htmlのボタンの処理-----------------------------------------------
// const covid_btn = document.getElementById("covid_btn");
// //絞るボタン
// covid_btn.addEventListener("click", () => {
//     var value = sel.value; //選択の結果
//     if (value !== "0") {
//         document.getElementById("note_comment").classList.add("none");
//         //selectで選択している場合以下の処理を行う
//         //valueの数字に対応するアーティスト名をvalueに代入する
//         switch(value) {
//             case "1":
//                 value = "mafumafu";
//                 break;
//             case "2":
//                 value = "soraru";
//                 break;
//             case "3":
//                 value = "uratanuki";
//                 break;
//             case "4":
//                 value = "sakata";
//                 break;
//             case "5":
//                 value = "amatsuki";
//                 break;
//             case "6":
//                 value = "luz";
//                 break;
//             case "7":
//                 value = "shima";
//                 break;
//             case "8":
//                 value = "senra";
//                 break;
//         }
//
//         //前回の結果をリセットする
//         els.forEach(function(li) {
//             li.classList.remove("none");
//         });
//
//         //クラス名にvalueがない場合、
//         //クラス名にnoneを追加して非表示にする
//         els.forEach(function(li) {
//              //対象のliのなかに
//              if(li.classList.value.indexOf(value) < 0) {
//                  li.classList.add("none");
//              }
//         });
//     }else {
//         //note_commentのnoneを消す toggleで
//         document.getElementById("note_comment").classList.remove("none");
//     }
// });
// //リセットボタン
// reset.addEventListener("click", () => {
//     els.forEach(function(li) {
//         li.classList.remove("none");
//         document.getElementById("note_comment").classList.add("none");
//     });
// });
//
