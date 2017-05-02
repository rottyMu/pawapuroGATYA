/**
 * メイン処理
 */

window.fn = {};
var mCharacterList = Array();
var mRealityList = Array();

/**
 * 初期読み込み時処理（OnsenUI)
 * メニューを読み込む。*/
ons.ready(function() {
  loadJson('dageki');
  
  // スタートボタン押下
  $('#start').click(function() {
      caluculate();
  });
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
    // イベキャラマスタから取得
    $.getJSON("json/mCharacter.json", function(data) {
        mCharacterList = data;
        for (var i in data) {
            // 練習ポジションリスト
            var positionList = data[i];
            for (var j in positionList) {
                if (position == j) {
                    // イベキャラリスト
                    var caractorArray = positionList[j];
                    for (var k in caractorArray) {
                        for (var l in caractorArray[k]) {
                            $('#charactor').append('<option value=' + l + '>' + caractorArray[k][l] + '</option>');
                        }
                    }
                }

            }
        }
    });
    
    // レアリティマスタから取得
    $.getJSON("json/mReality.json", function(realityData) {
        mRealityList = realityData;
        for (var m in realityData) {
            for (var n in realityData[m]) {
                $('#reality').append('<option value=' + n + '>' + realityData[m][n] + '</option>');
            }
        }
    });
};