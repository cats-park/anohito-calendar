//0=選択してください！
//1=まふまふ
//2=そらる
//3=うらたぬき
//4=となりの坂田
//5=天月-あまつき-
//6=luz
//7=志麻
//8=センラ
const reset = document.getElementById("reset_btn");
const sel = document.getElementById("sel_artist");
let els;

//covid.htmlのボタンの処理-----------------------------------------------
const covid_btn = document.getElementById("covid_btn");
//絞るボタン
covid_btn.addEventListener("click", () => {
    els = document.querySelectorAll('.target');
    console.log(els);
    var value = sel.value; //選択の結果
    if (value !== "0") {
        document.getElementById("note_comment").classList.add("none");
        //selectで選択している場合以下の処理を行う
        //valueの数字に対応するアーティスト名をvalueに代入する
        switch(value) {
            case "1":
                value = "mafumafu";
                break;
            case "2":
                value = "soraru";
                break;
            case "3":
                value = "uratanuki";
                break;
            case "4":
                value = "sakata";
                break;
            case "5":
                value = "amatsuki";
                break;
            case "6":
                value = "luz";
                break;
            case "7":
                value = "shima";
                break;
            case "8":
                value = "senra";
                break;
        }
        //前回の結果をリセットする
        els.forEach(function(li) {
            li.classList.remove("none");
        });
        //クラス名にvalueがない場合、
        //クラス名にnoneを追加して非表示にする
        els.forEach(function(li) {
             //対象のliのなかに
             if(li.classList.value.indexOf(value) < 0) {
                 li.classList.add("none");
             }
        });
    }else {
        //note_commentのnoneを消す toggleで
        document.getElementById("note_comment").classList.remove("none");
    }
});
//リセットボタン
reset.addEventListener("click", () => {
    els = document.querySelectorAll('.target');
    els.forEach(function(li) {
        li.classList.remove("none");
        document.getElementById("note_comment").classList.add("none");
    });
});
