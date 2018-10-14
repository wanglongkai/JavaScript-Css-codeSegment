/*通用事件侦听库对象：包含绑定事件、解除事件、阻止事件冒泡、阻止事件默认行为*/

var EventUtil = {
  //绑定事件
  addEvent:function(el,type,handler){
    if(el.addEventListener){
      el.addEventListener(type,handler,false);
    }else if (el.attachEvent) {
      el.attachEvent("on"+type,handler);
    }else {
      el["on"+type] = handler;
    }
  },
  //解除事件
  removeEvent:function(el,type,handler){
    if(el.removeEventListener){
      el.removeEventListener(type,handler,false);
    }else if (el.detachEvent) {
      el.detachEvent("on"+type,handler);
    }else{
      el["on"+type]=null;
    }
  },
  //阻止事件冒泡
  stopPropagation:function(event){
    let event = event||window.event;
    if(event.stopPropagation){
      event.stopPropagation();
    }else{
      event.cancelBubble=true;
    }
  },
  //阻止事件默认行为
  preventDefault：function(event){
    let event = event||window.event;
    if(event.preventDefault){
      event.preventDefault();
    }else if(event.returnValue){
      event.returnValue = false;
    }else{
      return false;
    }
  }
}
