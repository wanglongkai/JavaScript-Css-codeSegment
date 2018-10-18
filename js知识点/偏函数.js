/*偏函数：固定一部分参数的函数*/

function partial(fn){
  //获取偏函数刚开始固定的参数
  var args  = [].slice.call(arguments,1);
  return function(){
    //获取偏函数剩余的参数并整合固定的参数
    var _args = args.concat([].slice.call(arguments));
    return fn.apply(this,_args);
  }
}

//测试：
function add(a,b){
  return a+b+this.value;
}
var addone = partial(add,1);
var value = 1;
var obj ={
  value:2,
  addone:addone
}
console.log(obj.addone(2));//5
