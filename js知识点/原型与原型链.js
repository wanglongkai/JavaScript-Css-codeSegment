/*
弄懂构造函数、原型、实例之间的关系
*/

function Person(){};
var person = new Person();

//这里的意思是：Person构造函数的prototype属性指向Person.prototype(原型对象)
console.log(Person.prototype === Person.prototype);// true

//等同于上一句。
console.log(Object.getPrototypeOf(person) === Person.prototype);// true

//这里的意思是：person实例的__proto__属性指向Perosn.prototype(原型对象)
console.log(person.__proto__ === Person.prototype);// true

//这里的意思是：Person.prototype(原型对象)的constructor属性指向Person构造函数
console.log(Person.prototype.constructor === Person);// true


/*
技巧或者要领：我们可以把原型（即，Object.prototype、Person.prototype）当作
实例原型看待。所以它有 __proto__ 属性
*/
//Object.prototype是所有对象的根原型，而他自己的原型是null.
console.log(Object.prototype.__proto__ === null); // true



/*注意点补充*/
//1.当获取person.constructor时，其实它并没有constructor属性，
//所以会从原型中读取，正好原型中有该属性，所以以下两条是正确的。
console.log(person.constructor === Person)
console.log(person.constructor === Person.prototype.constructor)

//2.绝大部分浏览器都支持__proto__这个非标准的方法访问原型，
//然而它并不存在，实际上，当使用obj.__proto__时，可以理解为返回了Object.getPrototypeOf(obj).

