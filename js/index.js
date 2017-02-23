
var indexmain=document.querySelector(".indexmain");

 var iamgesdata=[
	{
		title:"",
		url:"./images/top1.jpg"
	},
	{
		title:"",
		url:"./images/top2.jpg"		
	},
	{
		title:"",
		url:"./images/top3.jpg"
	}
 ]

function banner(option1,option2){		
	var a=document.createElement("a");
		a.appendChild(document.createTextNode(option1))
	a.style.background="url(" + option2 + ")";
		return a	
};
var arr=iamgesdata.map(function(item){
	var	img=document.createElement("img");
	img=banner(item.title,item.url);
	indexmain.appendChild(img);
	return img
})

var a=0;
arr[a].classList.add("over");
var play=function(){
 		b=a;
	 a<arr.length-1 ? a++ : a=0;
	
	 	 arr[b].classList.remove("over");
	 	 arr[a].classList.add("over");
	 	 
}

 var div1=document.createElement("div"),
 	div2=document.createElement("div");	
 	div1.className="left";
 	div2.className="right";

var time=setInterval(play,2000);
indexmain.onmouseover=function(){
	clearInterval(time);
	div1.style.display="block";
	div2.style.display="block";
}
indexmain.onmouseout=function(){
	time=setInterval(play,2000);
	div1.style.display="none";
	div2.style.display="none";
}
div2.onclick=function(){
	play()
};

  div1.onclick=function (){
	b= a; 
	a>0 ? a-- : a=arr.length-1;
	
	arr[a].classList.add("over");
	arr[b].classList.remove("over");
	console.log(arr[a]);

	} 
indexmain.appendChild(div1);
indexmain.appendChild(div2);

var indocdata=[
	{
		background:"./images/img1.png",
		title:"豪车不止BBA",
		infor:"德系三驾马车，是时候退位让贤",
		src:"./images/index_36.png"
	},
	{
		background:"./images/img2.png",
		title:"百年大厂杰作",
		infor:"时间在流逝，品质在流传",
		src:"./images/index_39.png"
	},{
		background:"./images/img3.png",
		title:"便宜才是王道",
		infor:"谁说便宜没好车",
		src:"./images/index_43.png"
	},{
		background:"./images/img4.png",
		title:"驾校毕业车",
		infor:"那些年我们练过的普桑和捷达",
		src:"./images/index_51.png"
	},{
		background:"./images/img5.png",
		title:"明星也抠门",
		infor:"明星都买二手车 你还等什么",
		src:"./images/index_58.png"
	},{
		background:"./images/img6.png",
		title:"全能大玩具",
		infor:"越野帮手，四驱利器",
		src:"./images/index_61.png"
	}]
  var js=document.querySelector(".js");
 
  function mw(option){
  		 var a=document.createElement("a"),
  			div=document.createElement("div"),
  			h1=document.createElement("h1"),
  			span=document.createElement("span"),
  			img=document.createElement("img");
  			a.style.background="url("+option.background+")";
  			h1.appendChild(document.createTextNode(option.title));
  			span.appendChild(document.createTextNode(option.infor));
  			img.src=option.src;

  			div.className="wb";
  			div.appendChild(h1);
  			div.appendChild(span);
  			div.appendChild(img);
  			a.appendChild(div);
  			return a
  }		
indocdata.forEach(function(item){
		js.appendChild(mw(item))
})


