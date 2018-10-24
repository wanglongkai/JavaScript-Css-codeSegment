/*比较完备的版本*/
function objectFactory(){
  var obj = new Object();
  Constructor = [].shift.call(arguments);
  obj.__proto__=Constructor.prototype;
  var ret = Constructor.apply(obj,arguments);
  return typeof ret === "object"?ret:obj;
}


/*简化版本*/
function create(){
  //1.新建一个对象
  var obj = new Object();
  //从arguments中获取构造函数
  Constructor = [].shift.call(arguments);
  //2.将实例原型属性指向构造函数原型
  obj.__proto__= Constructor.prototype;
  //3.将构造函数的this值指向新建的对象
  Constructor.apply(obj,arguments);
  //4.返回实例对象
  return obj;
}


//测试：
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype.sayInfo = function(){
	console.log(this.name+": "+this.age);
}

var wlk = create(Person,"wlk",22);
wlk.sayInfo();
