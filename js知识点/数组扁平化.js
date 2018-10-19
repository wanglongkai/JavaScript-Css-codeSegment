/*数组扁平化就是将一个多层数组转换成一层数组。*/

//方法一：遍历每一项
function flatten01(arr){
  var newarr = [];
  for(var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      newarr.push(...flatten01(arr[i]));//递归
    }else{
      newarr.push(arr[i]);
    }
  }
  return newarr;
}


//方法二：reduce
function flatten02(arr){
  return arr.reduce(function(prev,next){
    return prev.concat(Array.isArray(next)?flatten02(next):next);
  },[])
}


//方法三：ES6扩展运算符
function flatten03(arr){
  while(arr.some(item=>Array.isArray(item))){
    arr = [].concat(...arr);
  }
  return arr;
}


//测试：
var testArr = [1,2,[3,4,5,[6,7,8]]];
console.log(flatten01(testArr));
console.log(flatten02(testArr));
console.log(flatten03(testArr));
