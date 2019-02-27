//先介绍一个技巧可用于深拷贝数组或对象，但是不能拷贝函数
var new_obj = JSON.parse(JSON.stringify(obj));



//浅拷贝
var shallowCopy = function(obj){
  //不拷贝基本类型
  if(typeof obj !== 'object'){
    return;
  }
  var new_obj = obj instanceof Array ? []:{};
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      new_obj[key] = obj[key];
    }
  }
  return new_obj;
}



//深拷贝：递归
var deepCopy = function(obj){
  if(typeof obj !== 'object'){
    return;
  }
  var new_obj = obj instanceof Array ?[]:{};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      new_obj[key]=(typeof obj[key] === "object")?deepCopy(obj[key]):obj[key];
    }
  }
  return new_obj;
}
