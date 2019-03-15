/*斐波拉契数列：1,1,2,3,5,8,13,21....*/

//递归方式求第n个斐波拉契数
function fibonacci(n){
  if(n==1||n==2){
    return 1;
  }
  return arguments.callee(n-1)+arguments.callee(n-2);
}

//循环，使用了ES6的解构赋值
function fibonacci2(n){
  if(n==1||n==2){
    return 1;
  }
  let first =1;let second =1;
  for(let i=2;i<n;i++){
    [first,second]=[second,first+second];
  }
  return second;
}


function Fibonacci(n)
{    
     if (n == 0) {
        return 0;
      }
      var pre = 0, // 前一个值
        cur = 1; // 当前值
      for (var i = 2; i <= n; i++) { // 更新两个值
        cur += pre;
        pre = cur - pre;
      }
      return cur;
}

