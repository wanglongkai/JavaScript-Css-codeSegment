//组合继承和寄生组合继承用的比较多，要熟练
function Father(name){
  this.name = name;
}
Father.prototype.sayName = function(){
  console.log(this.name);
}


function Son(name,age){
  Father.call(this,name);//关键代码①：组合父类构造函数中的属性或方法
  this.age = age;
}

//关键代码②
Son.prototype = new Father();
Son.prototype.constructor = Son;

/*
两个关键代码导致子类本身和原型中都有父类构造函数中的属性或方法。通过寄生组合继承可解决这个问题。
*/

//添加子类自己的方法到原型中(最后添加，不要颠换顺序);
Son.prototype.sayAge = function(){
  console.log(this.age);
}


//测试：
var son = new Son("GGG",20);
son.sayName();
son.sayAge();
