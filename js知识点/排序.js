/*冒泡排序*/
function bubbleSort(arr){
  for(var i=0;i<arr.length-1;i++){
    //这里减i的原因是冒泡i次后，
		//数组后面的相关部分已经排好了，不需要在排了。
    for(var j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}



/*快速排序*/
function quickSort(arr){
  if(arr.length<=1){
    return arr;
  }
  //找到中心点下标
  var pivotIndex = Math.floor(arr.length/2);
  //找到中心点的值
  var pivot = arr.splice(pivotIndex,1)[0];
  var left = [];
  var right = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot],quickSort(right));
}


/*插入排序*/
function insertSort(arr){
  var guard;
  for(var i=1;i<arr.length;i++){
    guard = arr[i];
    var j=i-1;
    while(j>=0&&guard<arr[j]){
      arr[j+1]= arr[j];
      j--;
    }
    arr[j+1]=guard;
  }
  return arr;
}


/*选择排序*/
function selectSort(arr){
  var minIndex,temp;
  	for(var i=0;i<arr.length;i++){
  		minIndex = i;
  		for(var j=i+1;j<arr.length;j++){
  			if(arr[j]<arr[minIndex]){
  				minIndex = j;
  			}
  		}
  		temp = arr[i];
  		arr[i] = arr[minIndex];
  		arr[minIndex] = temp;
  	}
  	return arr;
}

var array = [3,9,0,1,4,2,9,3];
console.log(bubbleSort(array));
