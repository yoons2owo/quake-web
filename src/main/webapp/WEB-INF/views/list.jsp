<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dc00a5485c8f690d8ebb8be4f0b6bf5e"></script>
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
.place_table {
    border-collapse: collapse;
    width: 100%;
}

.place_table th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.place_table tr:hover {background-color:#f5f5f5;}



</style>
<script type="text/javascript">
$(document).ready(function(){
	var dataJson;
	var pageTotal;
	var boardNo;
	
	$("#search").on("click", function(){
		alert("버튼");
		
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
			pageTotal = Math.ceil((boardNo / 20)); 
			
			var pageNo = 1;
			
			$(".page_list").empty();
			for(var i = 1; i <= pageTotal; i++){
				var pageHtml = "<button class='page' value="+i+">"+i+"</button>";
				$(".page_list").append(pageHtml);
			}
		
			
			$('.page').click(function(){
			    var pageNo =  $(this).attr("value");
			    pageCall(pageNo);
			});
			pageCall(pageNo);
			
			
			
			
		
	
		});	
		
	});
	
	
	function pageCall(pageNo){
    	var mapList = "<tr><th>번호</th><th>발생 날짜</th><th>규모</th><th>위도</th><th>경도</th><th>위치</th><th>지도보기</th></tr><tr>";
    	var boardNo = dataJson.length;
    	
    		if (pageNo < pageTotal) {
    	
		    	for (var i = 0; i < 20; i++){
			    		mapList += "<th>" + (boardNo - (20 * (pageNo - 1))).toString() + "</th>";
			    		mapList += "<th>" + dataJson[i + (20 * (pageNo - 1))][1] + "</th>";
			    		mapList += "<th>" + dataJson[i + 20*(pageNo - 1)][2] + "</th>";
			    		mapList += "<th>" + dataJson[i+ 20*(pageNo - 1)][4] + "</th>";
			    		mapList += "<th>" + dataJson[i+ 20*(pageNo - 1)][5] + "</th>";
			    		mapList += "<th>" + dataJson[i+ 20*(pageNo - 1)][6] + "</th><th><button class='mapButton' value="+ parseInt(i+ 20 * (pageNo - 1)) +">지도</button></th></tr>";

			    		boardNo = boardNo - 1;
		    		
				}
    	 }else{
    		 var boardNoSub = boardNo;
    		 for ( var i = 0; i < boardNoSub % 20; i++){
    			 
     			mapList += "<th>" + (boardNo - (20 * (pageNo - 1))).toString() + "</th>";
 	    		mapList += "<th>" + dataJson[i + (20 * (pageNo - 1))][1] + "</th>";
 	    		mapList += "<th>" + dataJson[i + 20*(pageNo - 1)][2] + "</th>";
 	    		mapList += "<th>" + dataJson[i+ 20*(pageNo - 1)][4] + "</th>";
 	    		mapList += "<th>" + dataJson[i+ 20*(pageNo - 1)][5] + "</th>";
 	    		mapList += "<th>" + dataJson[i+ 20*(pageNo - 1)][6] + "</th><th><button class='mapButton' value="+ parseInt(i+ 20 * (pageNo - 1)) +">지도</button></th></tr>";
 	    		boardNo = boardNo - 1;
     		} 
    	 }
	    
    	 
		 $(".place_table").empty();
         $(".place_table").append(mapList);
         
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
		
		
		
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
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
		
	
	

});
	
</script>
<title>Insert title here</title>
</head>
<body>

<form>
	<input type="text" id="dateFrom_id" name="dateFrom" value="2018-01-01" title="발생시작일" /> 
	<span>~</span> 
	<input type="text" id="dateTo_id" name="dateTo" value="2018-08-23" title="발생종료일" /> 
	
	<label for="search_earthquake_select_01">규모범위</label>
	<select name="startmt" id="startmt_id" title="규모범위 시작"> 
		<option value="0" >선택</option>
			<option value="0" selected="selected">0.0</option>
			<option value="1" >1.0</option>
			<option value="2" >2.0</option>
			<option value="3" >3.0</option>
			<option value="4" >4.0</option>
			<option value="5" >5.0</option>
			<option value="6" >6.0</option>
			<option value="7" >7.0</option>
			<option value="8" >8.0</option>
			<option value="9" >9.0</option>
			<option value="10" >10.0</option>
		
	</select>
	<span class="short">이상 ~</span> 
	<select name="endmt" id="endmt_id"  title="규모범위 끝">
		<option value="999" selected="selected">선택</option> 
			<option value="0" >0.0</option>
			<option value="1" >1.0</option>
			<option value="2" >2.0</option>
			<option value="3" >3.0</option>
			<option value="4" >4.0</option>
			<option value="5" >5.0</option>
			<option value="6" >6.0</option>
			<option value="7" >7.0</option>
			<option value="8" >8.0</option>
			<option value="9" >9.0</option>
			<option value="10" >10.0</option>
	</select> 
	<span class="short2">미만</span>
	<label for="user_date8">검색어</label>
	<input type="text" id="searchKey" name="keyword" value=""/> 
	<input type="button" id="search" value="검색하기" />

</form> 
<div class="place_list">
        <table class="place_table">
       
          
        </table>
</div>
<div class="page_list"></div>
<div class="wrap-loading display-none">
    <div><img src="resources/img/Loading_icon.gif" /></div>
</div>
<div id="map" style="width:60%;height:500px;"></div>

</body>
</html>