/**
 * 確率計算処理
 */
function caluculate() {
    var num = Math.random();
    console.log(num);
    // レアリティマスタから取得
    var realityList = {};
    $.getJSON("json/mReality.json", function(data) {
        
        for (var i in data) {
            realityList = data[i];
        }
        console.log(realityList);
        // レアリティ抽選
        var rand = Math.floor( Math.random() * 11 );
        console.log(rand);
        if (num < 0.25) {
            
        }
    });
    
    if (num < 0.25) {
        
    }
    

};

// /**
//  * レアリティマスタjsonから取得
//  */
// function getMRealityJson() {
//     var realityList = {};
//     $.getJSON("json/mReality.json", function(data) {
//         
//         for (var i in data) {
//             realityList = data[i];
//         }
//         return realityList;
//     });
//     
// }
// 
// function aaa() {
//     return "aa";
// }