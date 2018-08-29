;(function () {
    console.log("왜안돼");
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="gtco-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#gtco-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#gtco-offcanvas').append(clone2);

		$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#gtco-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-gtco-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	var tabs = function() {

		// Auto adjust height
		$('.gtco-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.gtco-tab-content-wrap'),
					tabHeight = $('.gtco-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.gtco-tab-content-wrap'),
						tabHeight = $('.gtco-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.gtco-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.gtco-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.gtco-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#gtco-counter').length > 0 ) {
			$('#gtco-counter').waypoint( function( direction ) {
										
//				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
//				}
			} , { offset: '90%' } );
		}
	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		tabs();
		goToTop();
		loaderPage();
//		counterWayPoint();
	});

    
     var area0 = ["시/도 선택","서울특별시","인천광역시","대전광역시","광주광역시","대구광역시","울산광역시","부산광역시","경기도","강원도","충청북도","충청남도","전라북도","전라남도","경상북도","경상남도","제주특별자치도"];
  var area1 = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
   var area2 = ["계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
   var area3 = ["대덕구","동구","서구","유성구","중구"];
   var area4 = ["광산구","남구","동구",     "북구","서구"];
   var area5 = ["남구","달서구","동구","북구","서구","수성구","중구","달성군"];
   var area6 = ["남구","동구","북구","중구","울주군"];
   var area7 = ["강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
   var area8 = ["고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
   var area9 = ["강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
   var area10 = ["제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
   var area11 = ["계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"];
   var area12 = ["군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
   var area13 = ["광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
   var area14 = ["경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
   var area15 = ["거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
   var area16 = ["서귀포시","제주시","남제주군","북제주군"];
    

     // 시/도 선택 박스 초기화

 $("select[name^=sido]").each(function() {
  $selsido = $(this);
  $.each(eval(area0), function() {
   $selsido.append("<option value='"+this+"'>"+this+"</option>");
  });
  $("select[name^=gugun]").append("<option value=''>구/군 선택</option>");
 });

 

 // 시/도 선택시 구/군 설정

 $("select[name^=sido]").change(function() {
  var area = "area"+$("option",$(this)).index($("option:selected",$(this))); // 선택지역의 구군 Array
  var $gugun = $("select[name^=gugun]"); // 선택영역 군구 객체
  $("option",$gugun).remove(); // 구군 초기화

  if(area == "area0")
   $gugun.append("<option value=''>구/군 선택</option>");
  else {
   $.each(eval(area), function() {
    $gugun.append("<option value='"+this+"'>"+this+"</option>");
   });
  }
 });
    
var mySlider = new rSlider({
	    target: '#slider',
	    values: {min: 1990, max: 2018},
	    range: true, // range slider
	    set:    null, // an array of preselected values
	    width:    "700px",
	    scale:    true,
	    labels:   false,
	    tooltip:  true,
	    step:     1, // step size
	    disabled: false, // is disabled?
	    onChange: null // callback
	});
	

    /*************************api******************************/
    

//오늘 날짜 구하기
var Now = new Date();
var NowTime = Now.getFullYear().toString() + "0";
NowTime += (parseInt(Now.getMonth()) + 1).toString() ;
NowTime += (Now.getDate() - 3 ).toString();	//최근 3일 간의 정보만 제공

var inputNow = Now.getFullYear().toString() + "-" + "0";
inputNow += (parseInt(Now.getMonth()) + 1).toString() + "-";
inputNow += Now.getDate().toString();

document.getElementById("dateTo_id").value = inputNow;


 $.ajax({
    url : "getApi" ,
		type: "post",
		data: {"NowTime" : NowTime},
     success : function(result) {
     appendApi(result);
     
//     var slideIndex = 1;
//     showDivs(slideIndex);
//
//     function plusDivs(n) {
//    	 console.log("ㅎ")
//       showDivs(slideIndex += n);
//     }
//
//     function showDivs(n) {
//       var i;
//       var x = document.getElementsByClassName("mySlides");
//       if (n > x.length) {slideIndex = 1}    
//       if (n < 1) {slideIndex = x.length}
//       for (i = 0; i < x.length; i++) {
//          x[i].style.display = "none";  
//       }
//       x[slideIndex-1].style.display = "block";  
//     }
//     
//     
//     
     
     
     }
});
 
 function appendApi(result){
//	 dataL = Object.keys(data).length;
//	 console.log("길이"+dataL);
	 var data = result.response.body.items.item;
	 
	 for(var i=0; i < result.response.body.totalCount; i++) {
		 console.log("함수");
	    	var html = "";
	    	
    		var loc = data[i]["loc"];	//위치
	     	var mt = data[i]["mt"];	//진도
	     	var tmEqk = data[i]["tmEqk"];	//진앙시
	     	var img = data[i]["img"];
	     	var rem = data[i]["rem"];
	     	console.log(loc);
	    	
	    	
	     	var tmEqk_y = tmEqk.toString().substring(0,4);
	     	
	     	var tmEqk_m = tmEqk.toString().substring(4,6);
	     	var tmEqk_d = tmEqk.toString().substring(6,8);
	     	var tmEqk_h = tmEqk.toString().substring(8,10);
	     	var tmEqk_b = tmEqk.toString().substring(10,12);
	     	var tmEqk_s = tmEqk.toString().substring(12,14);
	     	
	     	var tmEqk_full = tmEqk_y +"년 " + tmEqk_m +"월 " + tmEqk_d +"일 " +"<br>" + tmEqk_h +"시 " + tmEqk_b +"분 " + tmEqk_s +"초 ";
	     	console.log(tmEqk_full);
	     	
	     	var styleD;
	     	if (i  == 0 ){
	     		styleD = 'style="display: block;"';
	     		
	     	} else {
	     		styleD = 'style="display: none;"';
	     	}
	     	
	     	html += '<div class="mySlides"  '+styleD+'> <div class="col-md-6" ><div class="feature-left animate-box" data-animate-effect="fadeInLeft">';
	     	html +='<span class="icon"><i class="icon-check"></i></span><div class="feature-copy"><h3>위치</h3>';
	     	html +=	'<p><span>' + loc + ' </span></p>';
	     	html += '</div></div><div class="feature-left animate-box" data-animate-effect="fadeInLeft"><span class="icon"><i class="icon-check"></i></span><div class="feature-copy">';
	     	html +=	'<h3>진도</h3><p>'+mt+'</p></div></div><div class="feature-left animate-box" data-animate-effect="fadeInLeft"><span class="icon"><i class="icon-check"></i></span>';
	     	html +=	'<div class="feature-copy"><h3>발생 시각</h3><p>'+tmEqk_full+'</p></div></div><div class="feature-left animate-box" data-animate-effect="fadeInLeft">';
	     	html +=	'<span class="icon"><i class="icon-check"></i></span><div class="feature-copy"><h3>참고 사항</h3><p>'+rem+'</p></div></div></div>';
	     	html +=	 '<div class="col-md-6"><div class="gtco-video gtco-bg" style="background-image: url('+img+'); "></div></div></div>';
	     	
	    	 $("#apiDiv").append(html);
	    	 console.log(html);
	     }
	 contentWayPoint();
 }
 

 
 
 function appendApi2(result){
	 
	 var data = result.response.body.items;
     var dataL = Object.keys(data).length;
     
//     console.log(result.response.body.totalCount)
     
    	if(result.response.body.totalCount == 1) {
    		var loc = data.item["loc"];	//위치
	     	var mt = data.item["mt"];	//진도
	     	var tmEqk = data.item["tmEqk"];	//진앙시
	     	var img = data.item["img"];
	     	var rem = data.item["rem"];
	     	
    	}else {
    		var loc = data.item[0]["loc"];	//위치
	     	var mt = data.item[0]["mt"];	//진도
	     	var tmEqk = data.item[0]["tmEqk"];	//진앙시
	     	var img = data.item[0]["img"];
	     	var rem = data.item[0]["rem"];
    	}
    	console.log(tmEqk)
     	var tmEqk_y = tmEqk.toString().substring(0,4);
     	var tmEqk_m = tmEqk.toString().substring(4,6);
     	var tmEqk_d = tmEqk.toString().substring(6,8);
     	var tmEqk_h = tmEqk.toString().substring(8,10);
     	var tmEqk_b = tmEqk.toString().substring(10,12);
     	var tmEqk_s = tmEqk.toString().substring(12,14);
     	
     	var tmEqk_full = tmEqk_y +"년 " + tmEqk_m +"월 " + tmEqk_d +"일 " +"<br>" + tmEqk_h +"시 " + tmEqk_b +"분 " + tmEqk_s +"초 ";
     	
     	$("#apiLoc").append(loc);
     	$("#apiMt").append(mt);
     	$("#apiTime").append(tmEqk_full);
     	$("#apiRem").append(rem);
     	var element = document.getElementById("apiImg");
     	element.style.backgroundImage = "url("+img+")";
	     
 }
 /************************목록조회******************************/
 var dataJson;
	var pageTotal;
	var boardNo;
	var count = 0;
	var page10Count = 0;
	
	$("#search").on("click", function(){
		
		var startmt = $("select[name=startmt").val();
		var endmt = $("select[name=endmt").val();
		var dateFrom = $("input[name=dateFrom").val();
		var dateTo = $("input[name=dateTo").val();
		var searchKey = $("input[name=keyword").val();
		
		$.ajax({
			type: "post",
			url: "ListRead",
			data: {"dateFrom" : dateFrom, 
					"dateTo" : dateTo,
					"startmt" : startmt,
					"endmt" : endmt,
					"searchKey" : searchKey},
			beforeSend: function (){
				 $('.wrap-loading').removeClass('display-none');
			}
		}).done(function(data){
			
			$('.wrap-loading').addClass('display-none');
			console.log(data);
			dataJson = data.result;
			
			boardNo = dataJson.length;
			
			if(boardNo == 0) {
				alert("검색 결과가 없거나 요청이 올바르지 않습니다.");
			} else{
//				$("#resultCount").data("to", boardNo);
//				console.log($("#resultCount").data("to"));
				
				var htmlCount = "";
//				document.getElementById("resultCountDiv").style.display = "block";
				htmlCount = '\
				<div class="feature-center" >\
				<span class="icon">\
					<i class="icon-eye"></i>\
				</span>\
				<span class="counter js-counter" id="resultCount" data-from="0" data-to='+boardNo+' data-speed="1000" data-refresh-interval="10">0</span>\
				<span class="counter-label">검색 결과</span>\
				</div>\
				'
				console.log(boardNo);
			   
				$("#resultCountDiv").empty();
				$("#resultCountDiv").append(htmlCount);
				
				counterWayPoint();
				
				pageTotal = Math.ceil((boardNo / 15)); 
				
				var pageNo = 1;
				
				$(".page_list").empty();
				var pageHtml = "";
				
				for(var i = 1; i <= pageTotal; i++){
					pageHtml += "<button class='page' value="+i+">"+i+"</button>";
				}
				$(".page_list").append(pageHtml);
				
				
				
				
				pageCall(pageNo);
				
		     
		     
				
				
				$('.page').click(function(){
				    var pageNo =  $(this).attr("value");
				    console.log("페이지넘"+pageNo);
				    pageCall(pageNo);
				});
			}
			

		
		});
		
		
		
	});
	
	
	
	function pageCall(pageNo){
		var element = document.getElementById("place_list_div");
		element.style.display ="block";
		
    	var mapList = "<tr><th>번호</th><th>발생 날짜</th><th>규모</th><th>위도</th><th>경도</th><th>위치</th></tr><tr>";
    	var boardNo = dataJson.length;
    	
    		if (pageNo < pageTotal) {
		    	for (var i = 0; i < 15; i++){
			    		mapList += "<th>" + (boardNo - (15 * (pageNo - 1))).toString() + "</th>";
			    		mapList += "<th>" + dataJson[i + (15 * (pageNo - 1))][1] + "</th>";
			    		mapList += "<th>" + dataJson[i + 15*(pageNo - 1)][2] + "</th>";
			    		mapList += "<th>" + dataJson[i+ 15*(pageNo - 1)][4] + "</th>";
			    		mapList += "<th>" + dataJson[i+ 15*(pageNo - 1)][5] + "</th>";
			    		mapList += "<th><button class='mapButton' value="+ parseInt(i+ 15 * (pageNo - 1)) +"><img src='resources/images/marker_icon-icons.com_54388.svg'  width='19px'></button>" + dataJson[i+ 15*(pageNo - 1)][6] + "</th></tr>";

			    		boardNo = boardNo - 1;
		    		
				} 
    	 }else{
    		 var boardNoSub = boardNo;
    		 console.log(boardNoSub - ((pageTotal-1)*15));
    		 for ( var i = 0; i < boardNoSub - ((pageTotal-1)*15) ; i++){
    			 
     			mapList += "<th>" + (boardNo - (15 * (pageNo - 1))).toString() + "</th>";
 	    		mapList += "<th>" + dataJson[i + (15 * (pageNo - 1))][1] + "</th>";
 	    		mapList += "<th>" + dataJson[i + 15*(pageNo - 1)][2] + "</th>";
 	    		mapList += "<th>" + dataJson[i+ 15*(pageNo - 1)][4] + "</th>";
 	    		mapList += "<th>" + dataJson[i+ 15*(pageNo - 1)][5] + "</th>";
 	    		mapList += "<th><button class='mapButton' value="+ parseInt(i+ 15 * (pageNo - 1)) +"><img src='resources/images/marker_icon-icons.com_54388.svg'; width='19px'; ></button>" + dataJson[i+ 15*(pageNo - 1)][6] + "</th></tr>";
 	    		boardNo = boardNo - 1;
     		} 
    	 }
	    
    	 
		 $(".place_table2").empty();
         $(".place_table2").append(mapList);
         
         $('.mapButton').click(function(){
			    var mapNo =  $(this).attr("value");
			    mapOpen(mapNo);
			});
	}
	
	function mapOpen(mapNo){
		console.log("맵오" + mapNo);
		var locN = dataJson[mapNo][4].substr(0,5);
		var locE = dataJson[mapNo][5].substr(0,6);
		var mt = dataJson[mapNo][2];
		
		console.log("위"+locN + " 경"+ locE + "진"+ mt);
		
		var circleColor;
		if (parseFloat(mt) < 3.0) {
			circleColor = "#66FF00";
		}else if (parseFloat(mt) < 4.0){
			circleColor = "#FF6600";
		}else if (parseFloat(mt) > 5.0){
			circleColor = "#FF0000";
		}
		
		
		
		var mapContainer = document.getElementById('listmap'), // 지도를 표시할 div 
	    mapOption = { 
	        center: new daum.maps.LatLng(36.446546, 127.838860), // 지도의 중심좌표
	        level: 14
	        // 지도의 확대 레벨
	    };  

		var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
	
		// 지도에 표시할 원을 생성합니다
		var circle = new daum.maps.Circle({
		    center : new daum.maps.LatLng(locN, locE),  // 원의 중심좌표 입니다 
		    radius: 40000, // 미터 단위의 원의 반지름입니다 
		    strokeWeight: 1, // 선의 두께입니다 
		    strokeColor: circleColor, // 선의 색깔입니다
		    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		    strokeStyle: 'dashed', // 선의 스타일 입니다
		    fillColor: circleColor, // 채우기 색깔입니다
		    fillOpacity: 0.7  // 채우기 불투명도 입니다   
		}); 
	
		// 지도에 원을 표시합니다 
		circle.setMap(map); 
		
		}
	
	
/************************분석******************************/
	var aType = "";
	
	$("#dataA1").on("click", function(){
		var yFromTo = mySlider.getValue();
		
		$('.gtco-tab-nav li').removeClass('active');
		$('#li1').addClass('active');
		
		$("#aResultDiv2 div").removeClass('animated-fast fadeOutDown active')
		$("#resultDiv1").addClass('animated-fast active fadeIn');
		
		
		tabs();
		
		$.ajax({
			type: "post",
			url: "mrCall1",
			data: {"yFromTo": yFromTo},
			beforeSend: function (){
				 $('.wrap-loading').removeClass('display-none');
			}
		}).done(function(data){
			
			document.getElementById('piechart').style.width = "70%";
			document.getElementById('barchart').style.width = "70%";
			document.getElementById('columnchart').style.width = "70%";
			document.getElementById('wordtree_basic').style.width = "100%";
			document.getElementById('map1').style.width = "30%";
			document.getElementById('map2').style.width = "30%";
			document.getElementById('map3').style.width = "30%";
			document.getElementById('map4').style.width = "0%";
			
			$('.wrap-loading').addClass('display-none');
			var element = document.getElementById('aResult');
			element.style.display = "block";
			
			fileRead1(data);
		});	
	});
	
	$("#dataA2").on("click", function(){
		var yFromTo = mySlider.getValue();
		
		$('.gtco-tab-nav li').removeClass('active');
		$('#li1').addClass('active');
		
		$(".gtco-tab-content-wrap div").removeClass('animated-fast fadeOutDown active')
		$("#resultDiv1").addClass('animated-fast active fadeIn');
		tabs();
		$.ajax({
			type: "post",
			url: "mrCall2",
			data: {"yFromTo": yFromTo},
			beforeSend: function (){
				 $('.wrap-loading').removeClass('display-none');
			}
		}).done(function(data){
			
			document.getElementById('piechart').style.width = "100%";
			document.getElementById('barchart').style.width = "100%";
			document.getElementById('columnchart').style.width = "100%";
			document.getElementById('wordtree_basic').style.width = "100%";
			document.getElementById('map1').style.width = "0%";
			document.getElementById('map2').style.width = "0%";
			document.getElementById('map3').style.width = "0%";
			document.getElementById('map4').style.width = "0%";
			
			$('.wrap-loading').addClass('display-none');
			var element = document.getElementById('aResult');
			element.style.display = "block";
			fileRead2(data);
		});	
	});
	
	var readJson = "";
	
	function fileRead1(data){
		var fileNm = data.url;
		$.ajax({
			type: "post",
			url: "File",
			data: {"fileNm" : fileNm},
		}).done(function(data){
			readJson = data.result;
			aType = "1";
			drawPie(aType);

		      
		});
	}
	
	function fileRead2(data){
		var fileNm = data.url;
		$.ajax({
			type: "post",
			url: "File",
			data: {"fileNm" : fileNm},
		}).done(function(data){
 			console.log(data);

			readJson = data.result;
			aType = "2";
			drawPie(aType);

		});	
	}
	
	var data_array = new Array();

	
	
	function drawMap(data_array, map){
		var mapContainer = document.getElementById(map), // 지도를 표시할 div 
	    mapOption = {
	        center: new daum.maps.LatLng(36.446546, 127.838860), // 지도의 중심좌표
	        level: 14 // 지도의 확대 레벨
	    };  
	
		// 지도를 생성합니다    
		var map = new daum.maps.Map(mapContainer, mapOption); 
		
		// 주소-좌표 변환 객체를 생성합니다
		var geocoder = new daum.maps.services.Geocoder();
		
		// 주소로 좌표를 검색합니다
		for (var i = 1; i < data_array.length; i ++) {
			
			var count = data_array[i][1];
			
			var circleColor = "";
	        var circleRadius = "";
	        
			if (count <= 3) {
				geocoder.addressSearch(data_array[i][0], function(result, status) {
					
				    // 정상적으로 검색이 완료됐으면 
				     if (status === daum.maps.services.Status.OK) {
				
				        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						circleColor = "#99CCFF";
						circleRadius = 10000;
		// 		     지도에 표시할 원을 생성합니다
						var circle = new daum.maps.Circle({
						    center : coords,  // 원의 중심좌표 입니다 
						    radius: circleRadius, // 미터 단위의 원의 반지름입니다 
						    strokeWeight: 1, // 선의 두께입니다 
						    strokeColor: circleColor, // 선의 색깔입니다
						    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
						    strokeStyle: 'dashed', // 선의 스타일 입니다
						    fillColor: circleColor, // 채우기 색깔입니다
						    fillOpacity: 0.7  // 채우기 불투명도 입니다   
						}); 
					
						// 지도에 원을 표시합니다 
						circle.setMap(map); 
				
				    } 
				}); 
				
				
			}else if (count <= 15 && count > 3){
				geocoder.addressSearch(data_array[i][0], function(result, status) {
					
				    // 정상적으로 검색이 완료됐으면 
				     if (status === daum.maps.services.Status.OK) {
				
				        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						circleColor = "#66FF66";
						circleRadius = 15000;
		// 		     지도에 표시할 원을 생성합니다
						var circle = new daum.maps.Circle({
						    center : coords,  // 원의 중심좌표 입니다 
						    radius: circleRadius, // 미터 단위의 원의 반지름입니다 
						    strokeWeight: 1, // 선의 두께입니다 
						    strokeColor: circleColor, // 선의 색깔입니다
						    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
						    strokeStyle: 'dashed', // 선의 스타일 입니다
						    fillColor: circleColor, // 채우기 색깔입니다
						    fillOpacity: 0.7  // 채우기 불투명도 입니다   
						}); 
					
						// 지도에 원을 표시합니다 
						circle.setMap(map); 
				
				    } 
				}); 
				
				
			}else if (count <= 30 && count > 15){
				geocoder.addressSearch(data_array[i][0], function(result, status) {
					
				    // 정상적으로 검색이 완료됐으면 
				     if (status === daum.maps.services.Status.OK) {
				
				        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						circleColor = "#FFFF00";
						circleRadius = 20000;
		// 		     지도에 표시할 원을 생성합니다
						var circle = new daum.maps.Circle({
						    center : coords,  // 원의 중심좌표 입니다 
						    radius: circleRadius, // 미터 단위의 원의 반지름입니다 
						    strokeWeight: 1, // 선의 두께입니다 
						    strokeColor: circleColor, // 선의 색깔입니다
						    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
						    strokeStyle: 'dashed', // 선의 스타일 입니다
						    fillColor: circleColor, // 채우기 색깔입니다
						    fillOpacity: 0.7  // 채우기 불투명도 입니다   
						}); 
					
						// 지도에 원을 표시합니다 
						circle.setMap(map); 
				
				    } 
				}); 
			}else if (count <= 60 && count > 30){
				geocoder.addressSearch(data_array[i][0], function(result, status) {
					
				    // 정상적으로 검색이 완료됐으면 
				     if (status === daum.maps.services.Status.OK) {
				
				        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						circleColor = "#FF9900";
						circleRadius = 25000;
		// 		     지도에 표시할 원을 생성합니다
						var circle = new daum.maps.Circle({
						    center : coords,  // 원의 중심좌표 입니다 
						    radius: circleRadius, // 미터 단위의 원의 반지름입니다 
						    strokeWeight: 1, // 선의 두께입니다 
						    strokeColor: circleColor, // 선의 색깔입니다
						    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
						    strokeStyle: 'dashed', // 선의 스타일 입니다
						    fillColor: circleColor, // 채우기 색깔입니다
						    fillOpacity: 0.7  // 채우기 불투명도 입니다   
						}); 
					
						// 지도에 원을 표시합니다 
						circle.setMap(map); 
				
				    } 
				}); 
			}else if (count <= 100 && count > 60){
				geocoder.addressSearch(data_array[i][0], function(result, status) {
					
				    // 정상적으로 검색이 완료됐으면 
				     if (status === daum.maps.services.Status.OK) {
				
				        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						circleColor = "#FF3333";
						circleRadius = 30000;
		// 		     지도에 표시할 원을 생성합니다
						var circle = new daum.maps.Circle({
						    center : coords,  // 원의 중심좌표 입니다 
						    radius: circleRadius, // 미터 단위의 원의 반지름입니다 
						    strokeWeight: 1, // 선의 두께입니다 
						    strokeColor: circleColor, // 선의 색깔입니다
						    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
						    strokeStyle: 'dashed', // 선의 스타일 입니다
						    fillColor: circleColor, // 채우기 색깔입니다
						    fillOpacity: 0.7  // 채우기 불투명도 입니다   
						}); 
					
						// 지도에 원을 표시합니다 
						circle.setMap(map); 
				
				    } 
				}); 
			}else if (count > 100 ){
				
				geocoder.addressSearch(data_array[i][0], function(result, status) {
					
				    // 정상적으로 검색이 완료됐으면 
				     if (status === daum.maps.services.Status.OK) {
				
				        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						circleColor = "#990000";
						circleRadius = 35000;
		// 		     지도에 표시할 원을 생성합니다
						var circle = new daum.maps.Circle({
						    center : coords,  // 원의 중심좌표 입니다 
						    radius: circleRadius, // 미터 단위의 원의 반지름입니다 
						    strokeWeight: 1, // 선의 두께입니다 
						    strokeColor: circleColor, // 선의 색깔입니다
						    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
						    strokeStyle: 'dashed', // 선의 스타일 입니다
						    fillColor: circleColor, // 채우기 색깔입니다
						    fillOpacity: 0.7  // 채우기 불투명도 입니다   
						}); 
					
						// 지도에 원을 표시합니다 
						circle.setMap(map); 
				
				    } 
				}); 
			}
		}
	}
	
	$("#li1").on("click", function(){
		drawPie(aType);
	});
	$("#li2").on("click", function(){
		drawBar(aType);
	});
	$("#li3").on("click", function(){
		drawColumn(aType);
	});
	$("#li4").on("click", function(){
		drawLine(aType);
	});
	
	function drawPie(aType){
		google.charts.load('current', {'packages':['corechart']});
	    google.charts.setOnLoadCallback(drawChart);

	      function drawChart() {
	    	console.log(aType);
	    	if (aType == "1") {
		    	var data_array = new Array();
		    	data_array[0] = ['지역', '발생 횟수'];
		    	
		    	var yFromTo = mySlider.getValue().split(",");
				console.log(yFromTo);
		    	
		    	var count=1;
		    	for(var i = 0; i <readJson.length; i++){
		    		
		    		if (yFromTo[1] - yFromTo[0] >= 10){
		    			if(readJson[i][1] >= 5){
			    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
			    			count = count + 1;
			    		}
		    		}else if (yFromTo[1] - yFromTo[0] >= 20){
		    			if(readJson[i][1] >= 10){
			    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
			    			count = count + 1;
			    		}
		    		}else{
			    		if(readJson[i][1] >= 2){
			    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
			    			count = count + 1;
			    		}
		    		}
		    	}
				console.log(data_array);
		    	  
		        var data = google.visualization.arrayToDataTable(data_array);
	
		        var options = {
		          title: '시군구별 지진 발생 횟수',
		          is3D: true,
		          fontName : 'Nanum Gothic'
		        };
	
		        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	
		        chart.draw(data, options);
		        
		        drawMap(data_array,'map1');
		        
	    	}else if (aType == "2") {
	    		var yFromTo = mySlider.getValue().split(",");
	    		var data_array = new Array();
	    		data_array[0] = ['진도', '발생 횟수'];
	    		data_array[1] = ['2.0≤M<3.0', 0];
    			data_array[2] = ['3.0≤M<4.0', 0];
				data_array[3] = ['4.0≤M<5.0', 0];
	    		data_array[4] = ['5.0≤M', 0];
	    			
	    		
	    		
	    		for(var j = yFromTo[0]; j <= yFromTo[1]; j++){
	    			for (var i = 0; i < readJson.length; i++){	
	    				for(var countMt = 2; countMt <= 5; countMt++){
		    				if (readJson[i][0] == j){
		    					if (readJson[i][1] == countMt) {
		    						data_array[countMt-1][1] = data_array[countMt-1][1] +  parseInt(readJson[i][2]);
		    					}
		    				}
	    				}
	    			}
	    			
	    			}
	    			 
	    		
	    		console.log(data_array);
	    		var data = google.visualization.arrayToDataTable(data_array);
	    		
		        var options = {
		          title: '규모별 지진 발생 횟수',
		          is3D: true,
		          fontName : 'Nanum Gothic'
		        };
	
		        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	
		        chart.draw(data, options);
		        $("#map1").empty();
	    	}
	      }
	}
	
	function drawBar(aType){
		if (aType == "1") {
			var data_array = new Array();
	    	data_array[0] = ['지역', '발생 횟수'];
	    	
	    	var yFromTo = mySlider.getValue().split(",");
			console.log(yFromTo);
	    	
	    	var count=1;
	    	for(var i = 0; i <readJson.length; i++){
	    		
	    		if (yFromTo[1] - yFromTo[0] >= 10){
	    			if(readJson[i][1] >= 5){
		    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
		    			count = count + 1;
		    		}
	    		}else if (yFromTo[1] - yFromTo[0] >= 20){
	    			if(readJson[i][1] >= 10){
		    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
		    			count = count + 1;
		    		}
	    		}else{
		    		if(readJson[i][1] >= 2){
		    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
		    			count = count + 1;
		    		}
	    		}
	    	}
			console.log(data_array);
	    	  
	        var data = google.visualization.arrayToDataTable(data_array);
	        
	        google.charts.load('current', {packages: ['corechart', 'bar']});
			google.charts.setOnLoadCallback(drawStacked);
			
			function drawStacked() {

			      var options = {
			        title: '시군구별 지진 발생 횟수',
			        chartArea: {width: '40%'},
			        isStacked: true,
			          fontName : 'Nanum Gothic',
			        hAxis: {
			          title: '발생 횟수',
			          minValue: 0,
			        },
			        vAxis: {
			          title: '시군구'
			        },isStacked: true,
			        'width': '100%',
		            'height': 500
			        
			      };
			      
			      var chart = new google.visualization.BarChart(document.getElementById('barchart'));
			      chart.draw(data, options);
			}
			drawMap(data_array, 'map2');
	        
		}else if( aType == "2") {
		
		var yFromTo = mySlider.getValue().split(",");
		var data_array = new Array();
		data_array[0] = ['year', '2.0≤M<3.0', '3.0≤M<4.0','4.0≤M<5.0','5.0≤M'];
		
		var count = 1;
		
		for(var j = yFromTo[0]; j <= yFromTo[1]; j++){
			data_array[count] = [0, 0, 0,0 ,0];
			data_array[count][0] = j.toString();
			
			for (var i = 0; i < readJson.length; i++){	
				if (readJson[i][0] == j){
					
					if (readJson[i][1] == 2){
						data_array[count][1] = parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 3){
						data_array[count][2] = parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 4){
						data_array[count][3]=parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 5){
						data_array[count][4]=parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 6){
						data_array[count][4]=data_array[count][4]+parseInt(readJson[i][2]);
					}
				}
			}
			count++;
			}
			 
		
		console.log(data_array)
		
		google.charts.load('current', {packages: ['corechart', 'bar']});
		google.charts.setOnLoadCallback(drawStacked);
		function drawStacked() {
		      var data = google.visualization.arrayToDataTable(data_array);

		      var options = {
		        title: '규모별 지진 발생 횟수',
		        chartArea: {width: '80%'},
		        isStacked: true,
		          fontName : 'Nanum Gothic',
		        hAxis: {
		          title: '발생 횟수',
		          minValue: 0,
		        },
		        vAxis: {
		          title: '년도'
		        },isStacked: true,
		        'width': '100%',
	            'height': 500
		        
		      };
		      
		      var chart = new google.visualization.BarChart(document.getElementById('barchart'));
		      chart.draw(data, options);
		}
		$("#map2").empty();
	}
	}
	
	function drawColumn(aType) {
		if (aType == "1") {
			var data_array = new Array();
	    	data_array[0] = ['지역', '발생 횟수'];
	    	
	    	var yFromTo = mySlider.getValue().split(",");
			console.log(yFromTo);
	    	
	    	var count=1;
	    	for(var i = 0; i <readJson.length; i++){
	    		
	    		if (yFromTo[1] - yFromTo[0] >= 10){
	    			if(readJson[i][1] >= 5){
		    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
		    			count = count + 1;
		    		}
	    		}else if (yFromTo[1] - yFromTo[0] >= 20){
	    			if(readJson[i][1] >= 10){
		    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
		    			count = count + 1;
		    		}
	    		}else{
		    		if(readJson[i][1] >= 2){
		    			data_array[count] = [readJson[i][0], parseInt(readJson[i][1])];
		    			count = count + 1;
		    		}
	    		}
	    	}
			console.log(data_array);
	    	  
	        var data = google.visualization.arrayToDataTable(data_array);
	        
	        google.charts.load('current', {packages: ['corechart', 'bar']});
			google.charts.setOnLoadCallback(drawStacked);
			
			function drawStacked() {

			      var options = {
			        title: '시군구별 지진 발생 횟수',
			        chartArea: {width: '80%'},
			        isStacked: true,
			          fontName : 'Nanum Gothic',
			        hAxis: {
			          title: '발생 횟수',
			          minValue: 0,
			        },
			        vAxis: {
			          title: '시군구'
			        },isStacked: true,
			        'width': '100%',
		            'height': 500
			        
			      };
			      
			      var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
			      chart.draw(data, options);
			}
			drawMap(data_array, 'map3');
	        
		}else if( aType == "2") {
		
		var yFromTo = mySlider.getValue().split(",");
		var data_array = new Array();
		data_array[0] = ['year', '2.0≤M<3.0', '3.0≤M<4.0','4.0≤M<5.0','5.0≤M'];
		
		var count = 1;
		
		for(var j = yFromTo[0]; j <= yFromTo[1]; j++){
			data_array[count] = [0, 0, 0,0 ,0];
			data_array[count][0] = j.toString();
			
			for (var i = 0; i < readJson.length; i++){	
				if (readJson[i][0] == j){
					
					if (readJson[i][1] == 2){
						data_array[count][1] = parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 3){
						data_array[count][2] = parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 4){
						data_array[count][3]=parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 5){
						data_array[count][4]=parseInt(readJson[i][2]);
					}
					else if (readJson[i][1] == 6){
						data_array[count][4]=data_array[count][4]+parseInt(readJson[i][2]);
					}
				}
			}
			count++;
			}
			 
		
		console.log(data_array)
		
		google.charts.load('current', {packages: ['corechart', 'bar']});
		google.charts.setOnLoadCallback(drawStacked);
		function drawStacked() {
		      var data = google.visualization.arrayToDataTable(data_array);

		      var options = {
		        title: '규모별 지진 발생 횟수',
		        chartArea: {width: '80%'},
		        isStacked: true,
		          fontName : 'Nanum Gothic',
		        hAxis: {
		          title: '발생 횟수',
		          minValue: 0,
		        },
		        vAxis: {
		          title: '년도'
		        },isStacked: true,
		        'width': '100%',
	            'height': 500
		        
		      };
		      
		      var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
		      chart.draw(data, options);
		}
		$("#map3").empty();
		}
	}
	function drawLine(aType) {
		if (aType == "1") {
			google.charts.load('current', {packages:['wordtree']});
		    google.charts.setOnLoadCallback(drawChart);
			
			var yFromTo = mySlider.getValue().split(",");
			var data_array = new Array();
			data_array[0] = ['Phrases'];
			
			for (var i = 1; i < readJson.length; i++){	
				var str1 = readJson[i][0].toString().substr(0,2);
				var str2 = readJson[i][0].toString().substring(2,readJson[i][0].toString().length);
				var str3 = readJson[i][1];
				var fullP = "지역 "+str1 + " " + str2 + " " + str3;
				data_array[i] = [fullP];
			}
			
			console.log(data_array);
			
			 function drawChart() {
				 
			        var data = google.visualization.arrayToDataTable(data_array);

			        var options = {
			          wordtree: {
			            format: 'implicit',
			            type: 'double',
			            word: '지역'
			          },
			          fontName : 'Nanum Gothic'
			        };

			        var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
			        chart.draw(data, options);
			 	}
			 drawMap(data_array, 'map4');
			 
		}else if (aType == "2") {
			google.charts.load('current', {packages:['wordtree']});
		    google.charts.setOnLoadCallback(drawChart);
			
			var yFromTo = mySlider.getValue().split(",");
			var data_array = new Array();
			
			data_array[0] = ['Phrases'];
			for (var i = 1; i < readJson.length; i++){	
				var str1 = readJson[i][0].toString();
				var str2 = readJson[i][1].toString();
				
				var str3 = "";
				if(str2 == "2"){
					str3 = '2.0≤M<3.0';
				}else if (str2 == "3"){
					str3 = '3.0≤M<4.0';
				}else if (str2 == "4"){
					str3 = '3.0≤M<4.0';
				}else if (str2 == "5"){
					str3 = '5.0≤M';
				}
				
				var str4 = readJson[i][2];
				var fullP = "년도 " +str1 + " " + str3 + " " + str4;
				data_array[i] = [fullP];
			}
			
			
			console.log(data_array);
			
			 function drawChart() {
				 
			        var data = google.visualization.arrayToDataTable(data_array);

			        var options = {
			          wordtree: {
			            format: 'implicit',
			            type: 'double',
			            word: '년도'
			          },
			          fontName : 'Nanum Gothic'
			        };

			        var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
			        chart.draw(data, options);
			 	}
		}
	}
	 /*************************대피소******************************/
//	
//	<div id="shelterMap" style="width:100%;height:500px;">
//    
//    </div>
//    <div class="shelterList">
//        <table class="shelterTable">
//       
//          
//        </table>
//    </div>
	
	
	$("#shelterSearch").on("click", function(){
		var sido = $("select[name=sido1]").val();
		var gugun = $("select[name=gugun1]").val();
		var gb = $("select[name=gb]").val();
		
		$.ajax({
		    url : "getMap" ,
				type: "post",
				data: {"sido": sido , "gugun": gugun, "gb" : gb},
		    success : function(result) {
		    	console.log(result);
		    	
		    	if (result.mapResult.length == 0){
		    		alert("검색 결과가 없거나 요청이 올바르지 않습니다.");
		    	}else {
		    		document.getElementById('shelterDiv').style.display = "block"; 
			    	//지도
			    	var positions = new Array();
			    	var result = result.mapResult;
			    	
			    	for (var i = 0; i < result.length; i++) {
			    		sub = new Object(); 
			    		sub.content = "<div>" +result[i]['시설명'] +"</div>";
				    	sub.latlng = new daum.maps.LatLng(result[i]['경도'], result[i]['위도']);
				    	positions.push(sub);
			    	}

			    	var mapContainer = document.getElementById('shelterMap'), // 지도를 표시할 div  
		    	    mapOption = { 
		    	        center: new daum.maps.LatLng(result[0]['경도'], result[0]['위도']), // 지도의 중심좌표
		    	        level: 7 // 지도의 확대 레벨
		    	    };

		    	    var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
			    	
			    	for (var i = 0; i < positions.length; i ++) {
			    	    // 마커를 생성합니다
			    	    var marker = new daum.maps.Marker({
			    	        map: map, // 마커를 표시할 지도
			    	        position: positions[i].latlng,	// 마커의 위치
			    	        clickable: true 
			    	    });
			    	    
			    	   daum.maps.event.addListener(marker, 'click', (function(marker, i) {
			    	       return function() {
			    	       	var iwContent = positions[i].content, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
			    	   	    iwRemoveable = true;
			    	       	
			    	           var infowindow = new daum.maps.InfoWindow({
			    	               content: iwContent,
			    	               removable : true
			    	           });
			    	         infowindow.open(map, marker);
			    	       }
			    	   })(marker, i));

			    	}
			    	//리스트
			    	var mapList = "<tr><th>시설명</th><th>상세주소</th><th>시설면적(m²)</th><th>시설구분</th></tr><tr>";
					for (var i = 0; i < result.length; i++) {
			            mapList += "<th>" + result[i]['시설명'] + "</th>";
			            mapList += "<th><button class='mapcenter' id='"+result[i]['경도']+","+ result[i]['위도']+"'><img src='resources/images/marker_icon-icons.com_54388.svg'  width='19px'></button>" + result[i]['주소'] + "</th>";
			            mapList += "<th>" + parseInt(result[i]['면적']) + "</th>";
			            
			            if (gb=="ingb"){
			            	mapList += "<th>실내대피소 </th></tr>";
			            } else if (gb=="outgb"){
			            	mapList += "<th>옥외대피소 </th></tr>";
			            }
			            
			            $(".shelterTable").empty();
			            $(".shelterTable").append(mapList);
					}
					$(".mapcenter").on("click", function(){
						var loc =  $(this).attr("id").split(",")
						var moveLatLon = new daum.maps.LatLng(loc[0], loc[1]);
					    console.log(loc);
					    // 지도 중심을 부드럽게 이동시킵니다
					    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
					    map.panTo(moveLatLon)
					});
			    }
		    	}
		    	
		    	
				
		});
		
	});
	
	$("#href1").on('click', function(event){
		var scrollPosition = $("#gtco-features").offset().top;
		event.preventDefault();

		$('html, body').animate({
			scrollTop: scrollPosition
		}, 500, 'easeInOutExpo');
		
		return false;
	});
	$('#href2').on('click', function(event){
		var scrollPosition = $("#gtco-features-2").offset().top;
		event.preventDefault();

		$('html, body').animate({
			scrollTop: scrollPosition
		}, 500, 'easeInOutExpo');
		
		return false;
	});
	$('#href3').on('click', function(event){
		var scrollPosition = $("#gtco-counter").offset().top;
		event.preventDefault();

		$('html, body').animate({
			scrollTop: scrollPosition
		}, 500, 'easeInOutExpo');
		
		return false;
	});
	$('#href4').on('click', function(event){
		var scrollPosition = $("#gtco-services").offset().top;
		event.preventDefault();

		$('html, body').animate({
			scrollTop: scrollPosition
		}, 500, 'easeInOutExpo');
		
		return false;
	});$('#href5').on('click', function(event){
		var scrollPosition = $("#gtco-started").offset().top;
		event.preventDefault();

		$('html, body').animate({
			scrollTop: scrollPosition
		}, 500, 'easeInOutExpo');
		
		return false;
	});
	
	
	
	
	
	
}());
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	 console.log("ㅎ")
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

