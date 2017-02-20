var guidedata=[
{
	title:"导购大全",
	infor:[
		{
			title:"城市大全",
			href:"city.html"
		},
		{
			title:"品牌大全 ",
			href:"carbrand.html"
		},
		{
			title:"车系大全",
			href:"carseries.html"
		}
	]
},
{
	title:"购车指南",
	infor:[
		{
			title:"如何挑选二手车",
			href:"how.html"
		},
		{
			title:"如何判断事故火烧水车 ",
			href:"how2.html"
		},
		{
			title:"二手车指标说明",
			href:"targe.html"
		}	
	]
},
{
	title:"关于我们",
	infor:[
		{
			title:"酷卡车理念",
			href:"##"
		},
		{
			title:"牛车 ",
			href:"##"
		},
		{
			title:"大风车",
			href:"###"
		},
		{
			title:"酷卡车手机版",
			href:"##"
		}
	]
},
{
	title:"联系我们",
	infor:[
		{
			title:"联系电话",
			hhref:"prac.html"
		}
	]
}
];
var foot=document.querySelector(".w1200");
	function guide(option){
		var div=document.createElement("div"),
			h2=document.createElement("h2");
			div.className="footguide";	
			h2.appendChild(document.createTextNode(option.title));

			div.appendChild(h2);		
			var cinfor=option.infor;
			function cin(option1){
				var a=document.createElement("a");
				a.appendChild(document.createTextNode(option1.title));
				a.href=option1.href;
				return a;
			}
			cinfor.forEach(function(option1){
				div.appendChild(cin(option1));
			});
			return div
	};

	guidedata.forEach(function(item){
		 foot.appendChild(guide(item));
	});


  var citydata=[
  		"厦门" ,"北京", "南宁", "杭州", "郑州" ,"漳州", "长沙", "合肥", "西安", "上海",
  		"宁波", "温州", "太原", "青岛", "南京", "武汉", "沈阳", "成都", "石家庄", "重庆",
  		 "台州", "大连", "福州", "佛山", "临沂", "济南", "苏州", "贵阳", "泉州", "南昌",
  		 "天津", "东莞", "深圳", "昆明", "广州", "包头", "鞍山", "淮南", "长春", "金华" ,
  		 "乌鲁木齐", "无锡", "柳州", "潍坊", "荆州", "保定", "枣庄", "洛阳", "常州", "沧州" ,"热门城市"
  ];

  function city(option){
  		var a=document.createElement("a");
  		a.innerHTML=option;
  		return a
  }
 
citydata.forEach(function(item){
	document.querySelector(".city").appendChild(city(item));

});
