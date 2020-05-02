const copyTitleBtn = document.getElementById("copyTitleBtn");
const copyTextBtn = document.getElementById("copyTextBtn");


copyTitleBtn.addEventListener("click", function() {
    // コピー対象をJavaScript上で変数として定義する
    let copyTarget = document.getElementById("resultTitle");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");
});

copyTextBtn.addEventListener("click", function() {
    // コピー対象をJavaScript上で変数として定義する
    let copyTarget = document.getElementById("resultText");

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");

});
