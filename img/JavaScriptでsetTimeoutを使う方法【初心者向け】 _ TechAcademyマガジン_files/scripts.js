$(function(){

  // ----------------------------------------------------
  // Bootstrap Load
  // ----------------------------------------------------
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // ----------------------------------------------------
  // ページトップスクロール
  // ----------------------------------------------------
  $('.pagetop').hide();
  $(window).on("scroll",function () {
    if ($(this).scrollTop() > 100) {
      $('.pagetop').fadeIn();
    } else {
      $('.pagetop').fadeOut();
    }
  });
  $('.pagetop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });

  // ----------------------------------------------------
  // navbar追従
  // ----------------------------------------------------
  var navbar_height = 70; // ナビゲーションの高さ
  var box = $(".navbar-fixed-top");

  $(document).scroll(function(){
    if($(this).scrollTop() >= navbar_height) {
      box.addClass("header-fixed");
    } else {
      box.removeClass("header-fixed");
    }
  });

  // ----------------------------------------------------
  // サイドバー追従
  // ----------------------------------------------------
  $(window).on('load', function () {
    var box    = $(".scroll-follow");
    var boxTop = box.offset().top - 85;

    $(document).scroll(function(){

      if($(this).scrollTop() >= boxTop) {
        box.addClass("fixed");
      } else {
        box.removeClass("fixed");
      }

    });
  });

  // ----------------------------------------------------
  // ページ内リンク
  // ----------------------------------------------------

  $(function(){
    //通常のクリック時
    $('a[href^="#"]').click(function() {
      //ページ内リンク先を取得
      var href= $(this).attr("href");
      //リンク先が#か空だったらhtmlに
      var hash = href == "#" || href == "" ? 'html' : href;
      //スクロール実行
      scrollToAnker(hash);
    });

    function scrollToAnker(hash) {
      var target = $(hash);
      var position = target.offset().top - navbar_height;
      $('body,html').stop().animate({scrollTop:position}, 500);
    }
  })

  // ----------------------------------------------------
  // hover時のクラス追加
  // ----------------------------------------------------
  $(".topic").hover(
    function () {
      $(".topic-bg", this).addClass("active");
    },
    function () {
      $(".topic-bg", this).removeClass("active");
    }
  );

  /*
  if (window.matchMedia('screen and (min-width:1024px)').matches) {
    $(".navbar-brand a").hover(
      function () {
        $(".navbar-text").show();
      },
      function () {
        $(".navbar-text").hide();
      }
    );
  }
  */

  // ----------------------------------------------------
  // 記事中のimgタグのwidth, heightを削除
  // ----------------------------------------------------

  $("article img").removeAttr("width height");

});

// ----------------------------------------------------
// wow.js ロード
// ----------------------------------------------------

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();
