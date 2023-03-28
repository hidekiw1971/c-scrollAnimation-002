
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // 
  // スクロールトップボタンの表示設定
  if ($(".js-scroll-top").length) {
    scrollAnimation();
  }
  // animation呼び出し関数
  function scrollAnimation() {
    $(window).scroll(function () {
      $(".js-scroll-top").each(function () { // each(要素に対して行う処理)
        // ↓情報を変数に格納している
        let position = $(this).offset().top, // topのy座標を取得
          scroll = $(window).scrollTop(), // scroll位置を取得
          windowHeight = $(window).height(); // ウィンドウの高さを取得

        // if (scroll > position - windowHeight + 200) {
        if (scroll > 500) {
          $(this).addClass("js-scroll-top-active");
        } else {
          $(this).removeClass("js-scroll-top-active");

        }
      });
    });
  }


  // ボタンをクリックしたらスクロールして上に戻る
  $('.js-scroll-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });


  // 
});
