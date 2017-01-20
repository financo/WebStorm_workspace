/**
 * Created by Administrator on 2017/1/19.
 */
var dataStr='1、1111111111111<br>\
    <br>\
    导演:1<br>\
    编剧:11<br>\
    主演:111<br>\
    类型:1111<br>\
    国家:11111<br>\
    语言;111111<br>\
    上映日期:1111111<br>\
    片场:11111111<br>\
    <br>\
    <br>\
    2、2222222222222<br>\
    <br>\
    导演:2<br>\
    编剧:22<br>\
    主演:222<br>\
    类型:2222<br>\
    国家:22222<br>\
    语言;222222<br>\
    上映日期:2222222<br>\
    片场:22222222<br>\
    <br>\
    <br>\
    3、3333333333333<br>\
    <br>\
    导演:3<br>\
    编剧:33<br>\
    主演:333<br>\
    类型:3333<br>\
    国家:33333<br>\
    语言;333333<br>\
    上映日期:3333333<br>\
    片场:33333333<br>\
    <br>\
    <br>\
    4、4444444444444<br>\
    <br>\
    导演:4<br>\
    编剧:44<br>\
    主演:444<br>\
    类型:4444<br>\
    国家:44444<br>\
    语言;444444<br>\
    上映日期:4444444<br>\
    片场:44444444<br>\
    <br>\
    <br>\
    ';
console.log(dataStr);
console.log('qqqqqqqqqqq');

var data=[];
var d=dataStr.split('<br>    <br>    <br>    ');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br>    <br>    ');
    data.push({
        img: c[0].replace('、',' ')+'.jpg',
        caption: c[0].split('、')[1],
        desc: c[1]
    });
    process.stdout.write(c[0].replace('、',' ')+'.jpg');
}