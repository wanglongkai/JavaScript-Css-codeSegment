/**
正则字面量和 new 正则对象的主要区别：
当正则始终保持不变时，建议使用前者；当正则有变量（即未知输入）时，只能使用对象

当使用对象形式时：
let regex = new RegExp(/^[a-zA-Z]+[0-9]*\W?_$/, "gi");
let regex = new RegExp("^[a-zA-Z]+[0-9]*\\W?_$", "gi");
以上两种形式的区别：前者和正则字面量相同，后者是正常的形式。
特别注意：后者需要"\"去转移\,所以是\\形式。
*/


//===============================================
/*
replace:将目标字符串中匹配到的子串替换成指定的子串。
返回：新的字符串。
关键注意：第二个参数可以是函数。
*/

//字符串去重：aaabbbccc变成abc
var str1 = "aaabbbbcccc";
var reg1 = /(\w)\1+/g;
// var result1 = str1.replace(reg1,"$1");
var result1 = str1.replace(reg1,function (match, p1,offset, string) {
  return p1;
});
console.log(result1);


//10000000000 变为10.000.000.000
var str2 = "1000000000000";
var reg2 = /(?=((\B)(\w{3})*)$)/g;
var result2 = str2.replace(reg2,".");
console.log(result2);


//转小驼峰
var str3 = "the-first-name";
var reg3 = /-(\w)/g;
var result3 = str3.replace(reg3,function ($,$1) {
    return $1.toUpperCase();
});
console.log(result3);





//===============================================
/*
match:使用时分两种情况，有g标识和没有g标识。
有g标识时，返回一个匹配到所有子串的数组。
没有g标识时，和RegExp.exec()的效果一样。
*/
//找到字符串中的所有数字
let str5 = "dgfhfgh254bhd1ku289fgdhdy675gfh";
let reg4 = /\d+/g;
console.log(str5.match(reg4));




//===============================================
/*
search:在目标字符串中匹配子串，如果匹配到，就返回*第一次*匹配到的索引，否则返回-1.
*/
let str6 = "This is a Chinese chractor 汉字";
let reg5 = /[\u4e00-\u9fa5]/;//匹配单个汉字
console.log(str6.search(reg5))




//===============================================
/*
split:将字符串分割成片段，并以数组形式返回
第一个参数指定在哪儿分割，第二个参数指定返回数组的长度
*/
let str7 = "I am test split method";
let reg6 = /\s/;
console.log(str7.split(reg6,3))



//===============================================
/*
RegExp.exec():返回一个匹配数组。
数组的第0项是匹配到的完整子串，
第1-n项时捕获分组的子串。
还有index和input两项，分别是完整子串的索引值和原始字符串
*/
let str8 = "The Quick Brown Fox Jumps Over The Lazy Dog";
let reg7 = /quick\s(brown).+(jumps)/ig;
console.log(reg7.exec(str8))//注意和四个string方法的区别



//===============================================
/*
RegExp.test():查看目标字符串中是否能匹配到子串，返回true或false。
*/
let str9 = 'hello world!';
let reg8 = /^hello/;
console.log(reg8.test(str9));//注意和四个string方法的区别