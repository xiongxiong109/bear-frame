/*
Bear.js由bear公司自主研发的js框架库
*/
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

function Bear(vArg){
		this.arr = [];  //选择元素的这样一个集合
	
		//vArg : function
		switch(typeof vArg){
			case 'function':
				window.onload = vArg;
			break;
			case 'string':
				
				switch( vArg.charAt(0) ){
					case '#':   //id
						 this.arr.push(document.getElementById(vArg.substring(1)));
					break;
					case '.':   //class
						this.arr = getByClass(document,vArg.substring(1));
					break;
					default:break;
				}
				
			break;
		}
}
Bear.prototype.html=function(str){
	if(str){
		for(var i=0;i<this.arr.length;i++){
			this.arr[i].innerHTML=str;
		}
	}else{
		return this.arr[0].innerHTML;
	}
}
function $(vArg){
	return new Bear(vArg); 
}