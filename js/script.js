




// ------------------------------------------------------------
// トップに戻るボタンの動き↓↓↓↓↓↓↓
document.querySelector('.to-top').addEventListener('click', () =>{
    window.scroll({ top: 0, behavior: 'smooth'});
});
// トップに戻るボタンの動き↑↑↑↑↑↑↑
// ------------------------------------------------------------





// ------------------------------------------------------------
// トップに戻るボタンを上部では非表示にし↓↓↓↓↓↓↓
// 特定のピクセルスクロール時にのみ表示をする↓↓↓↓↓↓↓
const toTopBtn = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // 200px以上スクロールしたら
    toTopBtn.classList.add('visible');
  } else {
    toTopBtn.classList.remove('visible');
  }
});
// トップに戻るボタンを上部では非表示にし↑↑↑↑↑↑↑
// 特定のピクセルスクロール時にのみ表示をする↑↑↑↑↑↑↑
// ------------------------------------------------------------





// ------------------------------------------------------------
// swiperを使ったスライドショー↓↓↓↓↓↓↓
const swiper = new Swiper('.swiper', {
    loop: true,                 // 無限ループ
    slidesPerView: 3,           // 一度に表示する画像枚数
    spaceBetween: 5,           // 画像間の隙間
    autoplay: {
      delay: 0,                 // 自動スライド間隔0でスムーズに流れる
      disableOnInteraction: false
    },
    speed: 2000,                // スライド移動速度
    freeMode: true,             // スライドをスムーズに流す
  });
// swiperを使ったスライドショー↑↑↑↑↑↑↑
// ------------------------------------------------------------





// ------------------------------------------------------------
// ハンバーガーメニューの動作↓↓↓↓↓↓↓

// 1.body要素を取得する
// 2.ハンバーガーボタンの要素を取得する
// 3.ハンバーガーボタンにクリックのイベントリスナーを追加する
// 4.ハンバーガーボタンがクリックされたら、body要素にopenというクラスを付けたり外したりする

// 1.
let bodyElement = document.querySelector('body');
// 2.
// document.getElementById('取得したい要素のid属性の値')
let hamBtn = document.getElementById('hamBtn');
// 3.
hamBtn.addEventListener('click',function(){
    // 4.
    bodyElement.classList.toggle('open')
})
// ハンバーガーメニューの動作↑↑↑↑↑↑↑
// ------------------------------------------------------------