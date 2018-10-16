//父类
class Father {
  constructor(name) {
    this.name = name;
  }

  sayName(){
    console.log(this.name);
  }

  static sayHello(){
    console.log("hello!!!");
  }
}


//子类继承父类
class Son extends Father{
  constructor(name,age){
    super(name);//调用父类构造器
    ths.age = age;
  }
  sayAge(){
    console.log(this.age);
  }
}


//测试
var son = new Son("wlk",20);
son.sayAge();
son.sayName();
Son.sayHello();//静态方法通过类名调用
