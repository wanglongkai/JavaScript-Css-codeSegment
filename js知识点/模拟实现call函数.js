Function.prototype.call2 = function(context){
  var context = context || window;
  //1.
  context.fn = this;
  var args = [];
  for(var i=1;i<arguments.length;i++){
    args.push('arguments['+i+']');
  }

  //2.
  var result = eval('context.fn('+args+')');

  //3.
  delete context.fn;

  //返回函数执行结果
  return result;
}


/*
实现思路：
1.将函数添加到指定对象的属性->context.fn = this;
2.执行函数，带有参数
3.删除函数，为了不影响原来的对象
*/

/*其实可以用ES6简化一下，如下：*/
Function.prototype.call3 = function(context){
  var context = context || window;
  context.fn = this;
  var args = Array.from(arguments).slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
}
