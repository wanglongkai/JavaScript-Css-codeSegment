//字符串去重：aaabbbccc变成abc
var str = "aaabbbbcccc";
var reg = /(\w)\1+/g;
var str2 = str.replace(reg,"$1");
console.log(str2);


//10000000000 变为10.000.000.000
var str4 = "1000000000000";
var reg1 = /(?=((\B)(\w{3})*)$)/g;
var s4 = str4.replace(reg1,".");
console.log(s4);


//转小驼峰
var str = "the-first-name";
var reg = /-(\w)/g;
var str2 = str.replace(reg,function ($,$1) {
    return $1.toUpperCase();
});
console.log(str2);


/*
正则字面量和 new 正则对象的主要区别：
当正则始终保持不变时，建议使用前者；当正则有变量（即未知输入）时，只能使用对象

当使用对象形式时：
let regex = new RegExp(/^[a-zA-Z]+[0-9]*\W?_$/, "gi");
let regex = new RegExp("^[a-zA-Z]+[0-9]*\\W?_$", "gi");
以上两种形式的区别：前者和正则字面量相同，后者是正常的形式。
特别注意：后者需要"\"去转移\,所以是\\形式。
*/

