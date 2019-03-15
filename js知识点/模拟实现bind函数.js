//第一版：
Function.prototype.bind2 = function(context){
  //保存被绑定函数
  var self = this;

  return function(){
    //这里使用return 是考虑到self函数可能有返回值
    return self.apply(context);
  }
}


//第二版：传参
Function.prototype.bind2 = function(context){
  var self = this;
  //获取bind2函数的第二到最后一个参数
  var args = Array.prototype.slice.call(arguments,1);

  return function(){
    //这个时候的arguments是指bind2返回的函数的入参
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context,bindArgs);
  }
}


//第三版
Function.prototype.bind2 = function (context) {

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

//最终版
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}