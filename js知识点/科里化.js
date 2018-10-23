/*科里化就是将多参数函数转换成单参数函数。比如：
test(a,b,c)====> curryTest(a)(b)(c)
*/
function curry(fn,args){
  //获取被科里化函数的参数个数
  var length = fn.length;
  args = args||[];
  return function(){
    //保存所有的参数
    var _args = args.slice(0);
    //临时保存传入的一个参数
    var arg;
    for(var i=0;i<arguments.length;i++){
      arg = arguments[i];
      _args.push(arg);
    }
    if(_args.length<length){
      return curry.call(this,fn,_args);
    }else{
      return fn.apply(this,_args);
    }
  }
}


//测试
function wlk(a,b,c){
  return a+b+c;
}
var result = curry(wlk);
console.log(result(1)(2)(3));
