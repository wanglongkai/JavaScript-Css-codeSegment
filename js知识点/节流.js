//方法一：时间戳
/*这种实现方式是事件立刻执行一次，往后每隔一段时间执行一次，最后不会再触发一次*/
function throttle(func,wait){
  var context,args,previous = 0;
  return function(){
    var now = +new Date();//加号可以将其转换从成毫秒数
    context=this;
    args = arguments;
    if(now-previous > wait){
      func.apply(context,args);
      previous = now;
    }
  }
}


//方法二：定时器
/*事件停止触发后任然会再执行一次*/
function throttle2(func,wait){
  var timer;
  var context,args;
  return function(){
    context = this;
    args= arguments;
    if(!timer){
      timer = setTimeout(function(){
        timer = null;
        func.apply(context,args);
      },wait)
    }
  }
}
