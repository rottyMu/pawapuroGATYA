/**
 * 確率計算処理
 */
function caluculate() {
    
    $('#result').text('');
    // 選択したイベキャラ
    var selectCharacter = $('#charactor').val();
    // 選択したレアリティ
    var selectReality = $('#reality').val();
    
    // 設定された各出現確率
    var psrInputParam = $('#psrInput').val();
    var srInputParam = $('#srInput').val();
    var prInputParam = $('#prInput').val();
    var rInputParam = $('#rInput').val();
    var pnInputParam = $('#pnInput').val();
    var nInputParam = $('#nInput').val();
    
    // イベキャラの抽選
    // TODO: *6のところはjsonから取得するようにする
    var characterRand = Math.floor( Math.random() * 2 );
    
    // レアリティの抽選
    var num = Math.random();
    var realityRand = Math.round(num * Math.pow( 10 , 2 )) / Math.pow( 10 , 2 );
    
    // レアリティチェック用変数
    var chkReality = "XXXXX";
    
    // 抽選回数
    var cnt = 1;
    
    for (var i=0; selectCharacter == characterRand; i++) {
        console.log('selectキャラ' + selectCharacter);
        console.log('抽選キャラ' + characterRand);
        // 選択したイベキャラを引けた場合
        if (selectCharacter == characterRand) {
            console.log('キャラ一致');
            for (var j=0; selectReality == chkReality; j++) {
                console.log('selectレア' + selectReality);
                console.log('抽選レア' + realityRand);
                // PSRの場合
                if (realityRand <= 0.05) {
                    chkReality = "0";
                    if (selectReality == chkReality) {
                        $('#result').text(cnt + '回でPSRを引きました！');
                        break;
                    } else {
                        // レアリティを再抽選
                        num = Math.random();
                        realityRand = Math.round(num * Math.pow( 10 , 2 )) / Math.pow( 10 , 2 );
                        cnt++;
                        console.log('レアリティ再抽選');
                    }
                } else if (realityRand > 0.05 && realityRand <= 0.25) {
                    chkReality = "1";
                    if (selectReality == chkReality) {
                        $('#result').text(cnt + '回でSRを引きました！');
                        break;
                    } else {
                        // レアリティを再抽選
                        num = Math.random();
                        realityRand = Math.round(num * Math.pow( 10 , 2 )) / Math.pow( 10 , 2 );
                        cnt++;
                        console.log('レアリティ再抽選');
                    }
                } else if (realityRand > 0.25 && realityRand <= 0.50) {
                    chkReality = "2";
                    if (selectReality == chkReality) {
                        $('#result').text(cnt + '回でPRを引きました！');
                        break;
                    } else {
                        // レアリティを再抽選
                        num = Math.random();
                        realityRand = Math.round(num * Math.pow( 10 , 2 )) / Math.pow( 10 , 2 );
                        cnt++;
                        console.log('レアリティ再抽選');
                    }
                } else {
                    chkReality = "3";
                    if (selectReality == chkReality) {
                        $('#result').text(cnt + '回でRを引きました！');
                        break;
                    } else {
                        // レアリティを再抽選
                        num = Math.random();
                        realityRand = Math.round(num * Math.pow( 10 , 2 )) / Math.pow( 10 , 2 );
                        cnt++;
                        console.log('レアリティ再抽選');
                    }
                }
            }
        } else {
            console.log('イベキャラ再抽選');
            // イベキャラを再抽選
            characterRand = Math.floor( Math.random() * 6 );
            cnt++;
        }

    }
};