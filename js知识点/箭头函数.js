/*箭头函数总体格式：()=>{}  ;  ()是参数列表，{}是函数体*/

//举例
//ES3和ES5中的普通函数
var fun = function(a,b){
  var num = a+b;
  return num;
}
//ES6中的箭头函数
var fun1 = (a,b)=>{
  var num = a+b;
  return num;
}


/*箭头函数的注意点*/
//1.如果参数只有一个，函数体只有返回语句，则可以不用括号或花括号。
//比如：
var fun2 = a=>a+3;
//相当于：
var fun3 = (a)=>{return a+3;};

//2.this指向问题：ES3、5中this指向调用函数的对象。而箭头函数中，this指向离它
//最近的作用域。
function testThis(){
  this.a = "a";
  this.b = "b";
  this.c = {
    a:"a+",
    b:function(){
      return this.a;
    }
  }
}
console.log(new testThis().c.b());
//ES3、5中，C对象调用b方法，所以this指向c对象的a属性。

function testThis2(){
  this.a = "a";
  this.b = "b";
  this.c = {
    a:"a+",
    b:()=>this.a
  }
}
console.log(new testThis2().c.b());
//箭头函数中this指向父层最近的作用域，所以这里this指向testThis2实例.
