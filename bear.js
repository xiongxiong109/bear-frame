/*
Bear.js由bear公司自主研发的js框架库
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
				return document.getElementById(str.substring(1));
				break;
			}
	}
}
var $=function(str){
	return new Bear(str); 
}