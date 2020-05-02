
// 結果をoutputする場所
const result = document.getElementById("result");
// 生成ボタン
const makeBtn = document.getElementById("make_btn");

// URLから媒体名を検索する際に使用する連想配列（キーワード：媒体名）
const mediums = {
    "youtube": "youtube",
    "nicovideo" : "niconico",
    "twitcasting" : "ツイキャス",
    "openrec" : "OPENREC",
    "mildom" : "mildom"
}

// 生成ボタンを押した時の処理
makeBtn.addEventListener("click", function() {
    const title = document.getElementById("title");
    const url = document.getElementById("url");
    // チェックボックスの内容を入れる
    const types = document.form2.option;
    const form2 = document.getElementById("form2");

    // resultの中にある前回の結果を削除する
    if(result.children.length !=0) {
        let rTitle = document.getElementById("resultTitle");
        let rText = document.getElementById("resultText");
        rTitle.remove();
        rText.remove();
    }

    // 前回結果の赤枠を削除
    title.style.border = "none";
    url.style.border = "none";
    form2.style.border = "none";

    // オプションで選択した個数
    let typesLength = checkTypes(types);

    // タイトル、URLが入力されていて、オプションが選択されていない場合makeFormat1()の処理を行う
    // タイトル、URLが入力されていて、オプションが1つ選択されている場合makeFormat2()の処理を行う
    // それ以外（タイトルかURLが未入力、オプションで2つ選択している）の場合対処の部分に赤枠を囲う
    if(title.value !="" && url.value !="" && typesLength ==0) {
        makeFormat1(title.value, url.value);
    }else if(title.value !="" && url.value !="" && typesLength ==1) {
        makeFormat2(title.value, url.value, types.value);
    }else {
        // タイトルが未入力の場合赤枠で囲む
        if(title.value =="") {
            title.style.border = "solid 3px red";
        }
        // URLが未入力の場合赤枠で囲む
        if(url.value =="") {
            url.style.border = "solid 3px red";
        }
        // オプションを複数選択している場合赤枠で囲む
        if(typesLength == 2) {
            form2.style.border = "solid 3px red";
        }
    }
});

// オプションで選択した個数をかえす
let checkTypes = (types) => {
    let arr = [];
    types.forEach((type) => {
        if(type.checked) {
            arr.push(type.value);
        }
    });
    return arr.length;
}

// 楽曲以外の場合の生成処理（オプションが選択されていない場合）
let makeFormat1 = (title, url) => {
    // URLに含まれている媒体名を変数に代入する
    let medium = checkMedium(url);

    result.insertAdjacentHTML("afterbegin",
    `
    <textarea rows="1" cols="60" id="resultTitle">【${medium}】${title}</textarea>
    `
    );
    result.insertAdjacentHTML("beforeend",
    `
    <textarea rows="3" cols="60" id="resultText">${medium}↓&#13;URL：${url}</textarea>
    `
    );
}

// 楽曲の場合の生成処理（オプションが1つ選択されている場合）
let makeFormat2 = (title, url, type) => {
    // URLに含まれている媒体名を変数に代入する
    let medium = checkMedium(url);

    result.insertAdjacentHTML("afterbegin",
    `
    <textarea rows="1" cols="60" id="resultTitle">【${medium}】『${title}』${type} 投稿</textarea>
    `
    );
    result.insertAdjacentHTML("beforeend",
    `
    <textarea rows="3" cols="60" id="resultText">${medium}↓&#13;URL：${url}
    </textarea>
    `
    );
}

// URLに含まれているキーワードから紐づく媒体名を返す
let checkMedium = (url) => {
    let resultMedium = "";
    Object.keys(mediums).forEach((medium) => {
        if(url.indexOf(medium) != -1) {
            resultMedium = mediums[medium];
        }
    });
    return resultMedium;
}
