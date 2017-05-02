/**
 * メイン処理
 */

window.fn = {};

/**
 * 初期読み込み時処理（OnsenUI)
 * メニューを読み込む。*/
ons.ready(function() {
  loadJson('dageki');
  caluculate();
});

/**
 * メニュー表示処理
 */
window.fn.open = function() {
    var menu = document.getElementById('menu');
    menu.open();
};

/**
 * メニュー選択時処理
 */
window.fn.load = function(page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content
        .load(page)
        .then(menu.close.bind(menu));
};

/**
 * jsonファイルから選手リストを取得・設定
 */
function loadJson(position) {
    $.getJSON("json/mCharacter.json", function(data) {
        for (var i in data) {
            // 練習ポジションリスト
            var positionList = data[i];
            for (j in positionList) {
                if (position == j) {
                    // イベキャラリスト
                    var caractorArray = positionList[j];
                    for (k in caractorArray) {
                        $('#charactor').append('<option>' + caractorArray[k] + '</option>');
                    }
                }

            }
        }
    });
};