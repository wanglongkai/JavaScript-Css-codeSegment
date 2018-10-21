/*寄生组合继承的关键方法*/
function inherit(son,father){
  //临时变量存储父类的原型
  let prototypeObj =  Object.create(father.prototype);
  //临时变量构造器指向子类
  prototypeObj.constructor = son;
  //子类的原型指向临时变量
  son.prototype = prototypeObj;
}

//举例

//父构造函数
function Father(name){
  this.name = name;
}
Father.prototype.sayName = function(){
  console.log(this.name);
}


//子类构造器
function Son(name,age){
  Father.call(this,name);//组合父构造器的属性或方法
  this.age = age;
}

//关键一步
inherit(Son,Father);

//添加子类自己的方法:*必须在继承后再添加子类自己的方法*
Son.prototype.sayAge = function(){
  console.log(this.age);
}



//测试一下
var son = new Son("wlk",20);
son.sayName();
son.sayAge();
