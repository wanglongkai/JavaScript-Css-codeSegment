/*关键是返回当前的this值*/

function getElement(id){
  var obj = document.getElementById(id);
  return {
    setWidth:function(wnumber){
      obj.style.width = wnumber+'px';
      return this;
    },
    setHeight:function(hnumber){
      obj.style.height = hnumber+'px';
      return this;
    },
    setBackgroundColor:function(color){
      obj.style.setProperty("background-color",color);
      return this;
    },
    consolelog:function(){
      console.log(obj);
    }
  }
}

//测试：
(function run(){
	getElement("container").setWidth(100).setHeight(100).setBackgroundColor('red').consolelog();
}());
