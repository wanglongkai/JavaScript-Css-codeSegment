/*惰性函数的原理是：合理重写函数*/

//惰性函数实现1：第一次执行时重写函数
function addEvent(type,element,fun){
  if(element.addEventListener){
    addEvent = function(type,element,fun){
      element.addEventListener(type,fun,false);
    }
  }else if (element.attachEvent) {
    addEvent = function(type,element,fun){
      element.attachEvent("on"+type,fun);
    }
  }else{
    addEvent = function(type,element,fun){
      element["on"+type] = fun;
    }
  }

  return addEvent(type,element,fun);
}


//惰性函数实现2：载入时就重写函数
var addEvent = (function(){
  if (document.addEventListener) {
        return function (type, element, fun) {
            element.addEventListener(type, fun, false);
        }
    }
    else if (document.attachEvent) {
        return function (type, element, fun) {
            element.attachEvent('on' + type, fun);
        }
    }
    else {
        return function (type, element, fun) {
            element['on' + type] = fun;
        }
    }
})();
