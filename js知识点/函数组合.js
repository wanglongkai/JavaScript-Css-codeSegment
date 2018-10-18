/*函数组合：
  将多个函数以参数的形式传入到一个函数中，
  然后各个函数从右往左依次执行，先执行函数的返回值作为后执行函数的参数
*/

function compose(...args){
  var len = args.length;
  var result;
  return function(){
    result = args[len-1].apply(this,arguments);
    while(len-1>0){
      len--;
      result = args[len-1].call(this,result);
    }
    return result;
  }
}



//测试
var toUpperCase = function(x) { return x.toUpperCase(); };
var hello = function(x) { console.log( 'HELLO, ' + x); };

var greet = compose(hello, toUpperCase);
greet('kevin');
