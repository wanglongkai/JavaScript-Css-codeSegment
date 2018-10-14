/*拖拽对象*/
var dragObj = function(){
  //被拖动的元素集合
  this.bedrags = document.querySelectorAll("#becopy li");
  //放置的地方
  this.dropplace = document.querySelector("#copyed");
  //临时存放拖拽副本
  this.copy = null;
}

//开始托动
dragObj.prototype.startDrag = function(){
  this.bedrags.forEach(function(item){
    item.setAttribute("draggable","true");
    item.addEventListener("dragstart",function(event){
        copy = event.target.cloneNode(true);
    })
  });
};

//放置
dragObj.prototype.dropDrag = function(){
  this.dropplace.addEventListener("dragover",function(event){
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });
  this.dropplace.addEventListener("drop",function(event){
    event.preventDefault();
    var container = this.getElementsByTagName('ul')[0];
    container.appendChild(copy);
  })
}


var drag = new dragObj();
drag.startDrag();
drag.dropDrag();
