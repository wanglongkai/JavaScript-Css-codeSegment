//原生js封装GET和POST两种方式的ajax方法

/*ajax发送GET请求*/
function ajaxGet(url,callback){
  //第一步：获取XHR对象
  var xhr = new XMLHttpRequest();
  //第二步：指定请求路劲和方式
  xhr.open("GET",url);
  //第三步：绑定请求状态发生改变时的回调函数
  xhr.onreadstatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      var type = xhr.getResponseHeader("Content-Type");
      if(type.indexof("xml") !== -1 && xhr.responseXML){
        callback(xhr.responseXML);
      }else if (type === "application/json") {
        callback(JSON.parse(xhr.responseText));
      }else {
        callback(xhr.responseText);
      }
    }
  }
  //第四步：正式发送请求
  xhr.send(null);
}


/*ajax发送POST请求(假设请求主体编码格式为json)*/
function ajaxJson(url,data,callback){
	//第一步：创建XMLHttpRequest对象
	var request = new XMLHttpRequest();
	//第二步：指定请求路径和方式
	request.open("POST",url);
	//第三步：绑定请求状态发生改变时的处理函数
	request.onreadystatechange = function(){
		//第四步：指定请求成功时执行内容
		if(request.readyState === 4 && request.status === 200){
			var type = request.getResponseHeader("Content-Type");
			if(type.indexof("xml") !== -1 && request.responseXML){
				callback(request.responseXML);
			}else if(type === "application/json"){
				callback(JSON.parse(request.responseText));
			}else{
				callback(request.responseText);
			}
		}
	};
	//第五步：设置请求头信息，指定请求主体的编码
	request.setRequestHeader("Content-Type","applicaton/json");
	//第六步：正式发送ajax请求主体
	request.send(JSON.stringify(data));
}
