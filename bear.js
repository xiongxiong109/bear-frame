/*
Bear.js由bear公司自主研发的js框架库
*/
/*
	这个构造函数不能return,否则无法使用prototype进行继承
*/
var Bear=function(str){
	var arr=[];
	switch(typeof str){
		case "function":
		window.onload=str;break;
		case "string":
			var tag=str.charAt(0);
			switch(tag){
				case "#":
				arr.push( document.getElementById(str.substring(1)) );
				break;
				case ".":
				arr=getByClass(document,str.substring(1));
				return arr;
				break;
				default:
				arr=document.getElementsByTagName(str);
				return arr;
				break;
			}
		break;
	}
}

Bear.prototype.html=function(){
	alert('message');
}
function getByClass(obj,cls){
	var arr=[];
	var reCls=new RegExp("\\b"+cls+"\\b");
	var tg=obj.getElementsByTagName("*");
	var len=tg.length;
	for(var i=0;i<len;i++){
		if( reCls.test(tg[i].className) ){
			arr.push(tg[i]);
		}
	}
	return arr;
}
var $=function(str){
	return new Bear(str); 
}