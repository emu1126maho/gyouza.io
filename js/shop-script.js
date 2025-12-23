//任意のタブにURLからリンクするための設定
function GethashID (hashIDName,menuId){
	console.log(menuId);
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				console.log('#'+menuId +'.tab li');
				$('#'+menuId +' .tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$('#'+menuId +" .area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
} 
 
//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	let menuId = $(this).closest('.menu-card')[0].id;// クリックされたタブのメニューを取得
	GethashID (idName,menuId);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('#'+menuId +'.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('#'+menuId +'.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});


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


