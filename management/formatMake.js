let req = new XMLHttpRequest();						// XMLHttpRequest オブジェクトを生成する

// 対象のURLをinputから受け取り変数に代入する

const makeBtn = document.getElementById("make_btn");

makeBtn.addEventListener("click", () => {
    // const url = "http://anohito-calendar.jp/index.html#request";
    //
    // req.open("GET", url);
    // req.send();
    //
    // req.onreadystatechange = function() {				// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
    // 	if(req.readyState == 4 && req.status == 200){	// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
    //         let json = req.responseText;
    //         console.log(json);
    //     }
    // };
    $.ajax({
        url: 'https://twitcasting.tv/uni_mafumafu/movie/608580223',
        type: 'GET',
        dataType: 'html',
    })
    .done(function(data) {
        $("#output").html($(data).find('#movietitle').text());
    })
    .fail(function( data ) {
        // ...
    });
});
