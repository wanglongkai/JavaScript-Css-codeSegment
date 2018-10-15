/*单例就是不管实例化多少次，构造函数只执行一次*/

class Db {
  constructor() {
    console.log("构造函数执行");
    this.connectDB();
  }

  //静态方法
  static getinstance(){
    if(!Db.instance){
      Db.instance = new Db();
    }
    return Db.instance;
  }

  connectDB(){
    console.log("连接到数据库");
  }
}


//测试
var db = Db.getinstance();
var db1 = Db.getinstance();
