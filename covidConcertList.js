
let req = new XMLHttpRequest();						// XMLHttpRequest オブジェクトを生成する

req.open("GET", "https://raw.githubusercontent.com/cats-park/json-data/master/covidConcertList.json");
req.send();

req.onreadystatechange = function() {				// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
	if(req.readyState == 4 && req.status == 200){	// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
        let json = JSON.parse(req.responseText);

        json.forEach((info) => {
            makeHtml(
                info.no,
                info.name,
                info.location,
                info.bDay,
                info.aDay,
                info.artist
            );
        });
    }
};

// 値を入れるulのidを取得する
const covidConcertList = document.getElementById("covid__concert-list");

// 各アーティストごとにフラグを作成
let mafFlag=false;
let sorFlag=false;
let uraFlag=false;
let sakFlag=false;
let amaFlag=false;
let luzFlag=false;
let shiFlag=false;
let senFlag=false;

// ソート用、クラス名に対象のアーティスト名を入れる変数
let classNameArtist="";
// 画像を入れるdivのidを代入する変数
let imgChoose;
// 日付を入れるdivのidを代入する変数
let dayin;
// 変更前の日付(bDay)を処理後に代入する変数
let beforeD;
// 変更後の日付(aDay)を処理後に代入する変数
let afterD;

// 取得したjsonファイルから各値を受け取り以下の処理を行う
let makeHtml = function(no,name,location,bDay,aDay,artist) {
    // 前回の値をリセット
    mafFlag=false;
    sorFlag=false;
    uraFlag=false;
    sakFlag=false;
    amaFlag=false;
    luzFlag=false;
    shiFlag=false;
    senFlag=false;
    classNameArtist="";

    // artsitの中に名前がある場合はflagをtrueにする、classNameArtistにアーティスト名を追加する
    if(artist.indexOf("まふまふ") != -1) {mafFlag=true; classNameArtist+=" mafumafu"}
    if(artist.indexOf("そらる") != -1) {sorFlag=true; classNameArtist+=" soraru"}
    if(artist.indexOf("うらたぬき") != -1) {uraFlag=true; classNameArtist+=" uratanuki"}
    if(artist.indexOf("となりの坂田") != -1) {sakFlag=true; classNameArtist+=" sakata"}
    if(artist.indexOf("天月") != -1) {amaFlag=true; classNameArtist+=" amatsuki"}
    if(artist.indexOf("luz") != -1) {luzFlag=true; classNameArtist+=" luz"}
    if(artist.indexOf("志麻") != -1) {shiFlag=true; classNameArtist+=" shima"}
    if(artist.indexOf("センラ") != -1) {senFlag=true; classNameArtist+=" senra"}

    covidConcertList.insertAdjacentHTML('beforeend',
    `
    <li class="target ${classNameArtist}" id="target${no}">
        <div class="covid__concert-list-inner">
            <h3>・${name}＠${location}</h3>
            <div class="covid__artist-list" id="covid__artist-list${no}">
            </div>
        </div>
    </li>
    `);

    //画像の処理
    imgChoose = document.getElementById(`covid__artist-list${no}`);
    // flagがtrueのアーティストの画像を出力する
    if(mafFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-mafumafu.jpeg" class="covid__artist">`);}
    if(sorFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-soraru.jpeg" class="covid__artist">`);}
    if(uraFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-uratanuki.jpeg" class="covid__artist">`);}
    if(sakFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-sakata.jpeg" class="covid__artist">`);}
    if(amaFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-amatsuki.jpeg" class="covid__artist">`);}
    if(luzFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-luz.jpeg" class="covid__artist">`);}
    if(shiFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-shima.jpeg" class="covid__artist">`);}
    if(senFlag==true) {imgChoose.insertAdjacentHTML('beforeend', `<img src="img/covid/cov-senra.jpeg" class="covid__artist">`);}

    //日付の処理
    dayin = document.getElementById(`target${no}`);

    beforeD = new Date(bDay.substring(0,4),bDay.substring(4,6)-1,bDay.substring(6));

    if(isNaN(aDay)==true) {
        // 日付ではない場合そのまま代入する
        afterD = aDay;
        dayin.insertAdjacentHTML('beforeend',
        `
        <p>${beforeD.getMonth()+1}月${beforeD.getDate()}日(${getWeekDay(beforeD)})　→　
        ${afterD}</p>
        `);
    }else {
        afterD = new Date(aDay.substring(0,4),aDay.substring(4,6)-1,aDay.substring(6));
        dayin.insertAdjacentHTML('beforeend',
        `
        <p>${beforeD.getMonth()+1}月${beforeD.getDate()}日(${getWeekDay(beforeD)})　→　
        ${afterD.getMonth()+1}月${afterD.getDate()}日(${getWeekDay(afterD)})</p>
        `);
    }
}

// 曜日をreturnする
let getWeekDay = function(date) {
        // 曜日配列
        var weekDay = ["日", "月", "火", "水", "木", "金", "土"];
        return weekDay[date.getDay()];
    }
