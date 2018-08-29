<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
<link rel="stylesheet" href="resources/css/rSlider.min.css">
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="resources/js/rSlider.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dc00a5485c8f690d8ebb8be4f0b6bf5e&libraries=services"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<style type="text/css" >

.wrap-loading{ /*화면 전체를 어둡게 합니다.*/
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background: rgba(0,0,0,0.2); /*not in ie */
    filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr='#20000000', endColorstr='#20000000');    /* ie */

}
.wrap-loading div{ /*로딩 이미지*/
    position: fixed;
    top:50%;
    left:50%;
    margin-left: -21px;
    margin-top: -21px;
}
.display-none{ /*감추기*/
    display:none;
}
</style>

<script type="text/javascript">
$(document).ready(function(){
	function drawMap(data_array){
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
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
			console.log("카운트"+count);
			
			var circleColor = "";
	        var circleRadius = "";
	        
			if (count <= 3) {
				geocoder.addressSearch(data_array[i][0], function(result, status) {
					
				    // 정상적으로 검색이 완료됐으면 
				     if (status === daum.maps.services.Status.OK) {
				
				        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

						circleColor = "#99CCFF";
						circleRadius = 10000;
						
				        console.log("ㅠㅠ"+circleColor);
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
						
				        console.log("ㅠㅠ"+circleColor);
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
						
				        console.log("ㅠㅠ"+circleColor);
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
						
				        console.log("ㅠㅠ"+circleColor);
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
						
				        console.log("ㅠㅠ"+circleColor);
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
				        console.log("ㅠㅠ"+circleColor);
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
			
			
			
// 			geocoder.addressSearch(data_array[i][0], function(result, status) {
			
// 			    // 정상적으로 검색이 완료됐으면 
// 			     if (status === daum.maps.services.Status.OK) {
			
// 			        var coords = new daum.maps.LatLng(result[0].y, result[0].x);
			       
// 			        console.log("ㅠㅠ"+circleColor);
// 	// 		     지도에 표시할 원을 생성합니다
// 					var circle = new daum.maps.Circle({
// 					    center : coords,  // 원의 중심좌표 입니다 
// 					    radius: circleRadius, // 미터 단위의 원의 반지름입니다 
// 					    strokeWeight: 1, // 선의 두께입니다 
// 					    strokeColor: circleColor, // 선의 색깔입니다
// 					    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
// 					    strokeStyle: 'dashed', // 선의 스타일 입니다
// 					    fillColor: circleColor, // 채우기 색깔입니다
// 					    fillOpacity: 0.7  // 채우기 불투명도 입니다   
// 					}); 
				
// 					// 지도에 원을 표시합니다 
// 					circle.setMap(map); 
			
// 			    } 
// 			}); 
		}
	}
	var year = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,
		2011,2012,2013,2014,2015,2016,2017,2018];
	
	var mySlider = new rSlider({
	    target: '#slider',
	    values: {min: 1990, max: 2018},
	    range: true, // range slider
	    set:    null, // an array of preselected values
	    width:    "500px",
	    scale:    true,
	    labels:   false,
	    tooltip:  true,
	    step:     1, // step size
	    disabled: false, // is disabled?
	    onChange: null // callback
	});
	// Returns selected values.
// 	mySlider.getValue();

// 	// Disables the range slider
// 	mySlider.disabled(true);

// 	// Callback
// 	mySlider.onChange(function (values) { 
// 	  // argument values represents current values 
// 	});

// 	// Sets new values
// 	mySlider.setValues(10, 20);

	// Destroys the range slider

	
	$("#mrBtn1").on("click", function(){
		alert("1버튼~");
		var yFromTo = mySlider.getValue();
		
		$.ajax({
			type: "post",
			url: "mrCall1",
			data: {"yFromTo": yFromTo},
			beforeSend: function (){
				 $('.wrap-loading').removeClass('display-none');
			}
		}).done(function(data){
			$('.wrap-loading').addClass('display-none');
			fileRead1(data);
		});	
	});
	
	$("#mrBtn2").on("click", function(){
		alert("2버튼~");
		var yFromTo = mySlider.getValue();
		$.ajax({
			type: "post",
			url: "mrCall2",
			data: {"yFromTo": yFromTo},
			beforeSend: function (){
				 $('.wrap-loading').removeClass('display-none');
			}
		}).done(function(data){
			$('.wrap-loading').addClass('display-none');
			fileRead2(data);
		});	
	});
	
	
	function fileRead1(data){
		var fileNm = data.url;
		$.ajax({
			type: "post",
			url: "File",
			data: {"fileNm" : fileNm},
		}).done(function(data){
			var readJson = data.result;
			
			  google.charts.load('current', {'packages':['corechart']});
		      google.charts.setOnLoadCallback(drawChart);
	
		      function drawChart() {
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
		          title: '시군구 별 지진 발생 횟수',
		          is3D: true
		        };
	
		        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
	
		        chart.draw(data, options);
		        
		        drawMap(data_array);
		      }
		      
		});
	}
	
	function fileRead2(data){
		var fileNm = data.url;
		$.ajax({
			type: "post",
			url: "File",
			data: {"fileNm" : fileNm},
		}).done(function(data){
// 			console.log(data);
// 			var result = JSON.stringify(data);
// 			$(".resultDiv").append(result);
			
			
			var yFromTo = mySlider.getValue().split(",");
			console.log(yFromTo);
			
			var readJson = data.result;
			
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
		});	
	}
	var data_array = new Array();

	function drawStacked() {
	      var data = google.visualization.arrayToDataTable(data_array);

	      var options = {
	        title: '규모별 지진 발생 횟수',
	        chartArea: {width: '75%'},
	        isStacked: true,
	        hAxis: {
	          title: '발생 횟수',
	          minValue: 0,
	        },
	        vAxis: {
	          title: '년도'
	        },isStacked: true,
	        'width': '100%',
            'height': 1000
	        
	      };
	      
	      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	      chart.draw(data, options);
	}
	
});


</script>
</head>
<body>

	<button id="mrBtn1">지역별 지진발생 횟수</button>
	<button id="mrBtn2">규모별 지진발생 횟수</button>
	<div class="resultDiv"></div>
	<input type="text" id="slider" class="slider">
	<div id="chart_div" style="width: '80%'; height: '600px'"></div>
	<div id="piechart" style="width: 900px; height: 500px;"></div>
	<div id="map" style="width:50%;height:500px;"></div>
	<div class="wrap-loading display-none">
	
    <div><img src="resources/img/Loading_icon.gif" /></div>

	</div> 


</body>
</html>