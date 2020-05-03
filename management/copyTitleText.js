// 「タイトルをコピー」のボタン
const copyTitleBtn = document.getElementById("copyTitle_btn");
// 「本文をコピー」のボタン
const copyTextBtn = document.getElementById("copyText_btn");

// 「タイトルをコピー」ボタンを押した時の処理
copyTitleBtn.addEventListener("click", function() {
    // コピー対象をJavaScript上で変数として定義する
    let copyTarget = document.getElementById("resultTitle");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");
});

// 「本文をコピー」ボタンを押した時の処理
copyTextBtn.addEventListener("click", function() {
    // コピー対象をJavaScript上で変数として定義する
    let copyTarget = document.getElementById("resultText");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

});
