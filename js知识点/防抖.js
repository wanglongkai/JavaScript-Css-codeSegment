//第一版：
function debounce01(func,wait){
  var timer;
  return function(){
    clearTimeout(timer);
    timer = setIimeout(func,wait);
  }
}


//第二版：解决this指向
function debounce02(func,wait){
	var timer;
	return function(){
		var context = this;
		clearTimeout(timer);
		timer = setTimeout(function(){
			func.apply(context);
		},wait);
	}
}


//第三版：解决event对象
function debounce03(func,wait){
	var timer;
	return function(){
		var context = this;
		var args = arguments;

		clearTimeout(timer);
		timer = setTimeout(function(){
			func.apply(context,args);
		},wait);
	}
}
