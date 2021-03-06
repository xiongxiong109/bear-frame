/*
Bear.js由bear公司自主研发的js框架库
*/
/*
	这个构造函数不能return,否则无法使用prototype进行继承
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
function bindEvent(obj,ev,fn){
	if(obj.addEventListener){
		obj.addEventListener(ev,fn,false);
	}else{
		obj.attachEvent('on'+ev,fn);
	}
}

function Bear(vArg){
		this.arr = [];  //选择元素的这样一个集合
	
		//vArg : function
		switch(typeof vArg){
			case 'function':
				bindEvent(window,'load',vArg);
			break;
			case 'string':
				
				switch( vArg.charAt(0) ){
					case '#':   //id
						 this.arr.push(document.getElementById(vArg.substring(1)));
					break;
					case '.':   //class
						this.arr = getByClass(document,vArg.substring(1));
					break;
					default:
						this.arr=document.getElementsByTagName(vArg);
					break;
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
/*
addClass
*/
Bear.prototype.addClass=function(cls){
	var reCls=new RegExp('\\b'+cls+'\\b');
	for(var i=0;i<this.arr.length;i++){
		if(!this.arr[i].className){
			this.arr[i].className=cls;
		}else if(!reCls.test(this.arr[i].className)){
			this.arr[i].className+=' '+cls;
		}
	}
}
/*
removeClass
*/
Bear.prototype.removeClass=function(cls){
	for(var i=0;i<this.arr.length;i++){
		var clsArr=this.arr[i].className.split(' ');
		for(var j=0;j<clsArr.length;j++){
			if(clsArr[j] == cls){
				//如果已经存在该类，就剔除
				clsArr.splice(j,1);
				this.arr[i].className=clsArr.join(' ');
			}
			//否则不做任何处理
		}
	}
}
function $(vArg){
	return new Bear(vArg); 
}
