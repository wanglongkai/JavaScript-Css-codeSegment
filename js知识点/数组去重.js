//双层for循环：i,j声明不能使用let。只能去重数字、字符串
function unique01(arr){
  var res = [];
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<res.length;j++){
      if(arr[i]===res[j]){
        break;
      }
    }
    if(j===res.length){
      res.push(arr[i]);
    }
  }
  return res;
}


//indexOf：简化内层循环。只能去重数字、字符串
function unique02(arr){
  var res = [];
  for(var i=0;i<arr.length;i++){
    if(res.indexOf(arr[i])===-1){
      res.push(arr[i]);
    }
  }
  return res;
}


//filter:很聪明的方法。只能去重数字、字符串，且对NaN无效。
function unique03(arr){
  return arr.filter((item,index)=>{
    return arr.indexOf(item)===index;
  })
}

//对象属性不重复特性：最全面，都可去重
function unique04(arr){
  var obj = {};
  return arr.filter((item)=>{
    return obj.hasOwnProperty(typeof item +JSON.stringify(item))?
    false:(obj[typeof item +JSON.stringify(item)]=true);
  })
}

//ES6的set:不能去重相同的对象（{}，[]等），可去重NaN。
function unique05(arr){
  return [...new Set(arr)];
}

//测试：
var testArr = [1,1,"1","1",{},{},[],[],NaN,NaN];
console.log(unique05(testArr));
