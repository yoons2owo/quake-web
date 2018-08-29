<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
<head>
<title>CSS Template</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="resources/css/index.css">
<link rel="stylesheet" type="text/css"  media="only screen and (max-width: 1200px)" href="resources/css/tablet.css">
<link rel="stylesheet" type="text/css"  media="only screen and (max-width: 670px)" href="resources/css/phone.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link href="https://fonts.googleapis.com/css?family=Gugi|Nanum+Gothic&amp;subset=korean" rel="stylesheet">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script src="resources/js/index.js"></script>
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dc00a5485c8f690d8ebb8be4f0b6bf5e"></script>
<style>
body{
font-family: 'Nanum Gothic', sans-serif;
}
h1 {
font-family: 'Gugi', sans-serif;}
}
h3{
font-family: 'Nanum Gothic', sans-serif;

}
</style>
<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
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
</script>
<style>

</style>
</head>
<body>
<div class="topnav">
  <a href="#">HOME</a>
  <a href="#">최근지진</a>
  <a href="#">행동요령</a>
  <a href="#">통계자료</a>
  <a href="#">대피소 찾기</a>
</div>

<div class="content">



<!-- 움직일 로고 -->
 <div class="logo">
     <h1 style="font-size: 100px">동공지진</h1>
 </div>
 
 <!-- 최근 지진 -->
<!--  <div class="recent_eq"> -->
<!--      <div class="recent_eq_txt"> -->
<!--           <h3>최근지진</h3> -->
<!--           <p id="loc_p">api로 최근 정보 받을 부분</p>  -->
<!--       </div> -->
<!--       <div class="recent_eq_img"> -->
<!--           <img src="resources/img/eqk_img.png"> -->
<!--       </div> -->
<!--  </div> -->
 <div class="re_eqdiv">
<div class="w3-content w3-display-container" id="re_eq" >

	  <!-- Slideshow -->
	  <div class="w3-display-container mySlides w3-animate-opacity" style="display: block;">
	    <img src="" id="id_img0" style="width:100%">
	    <div class="w3-display-middle w3-text-white w3-container w3-padding-32 w3-hide-small">
	      <span class="w3-white w3-padding-large" id="id_mt0">진도 </span>
	      <span class="w3-white w3-padding-large" id="id_loc0">위치 </span>
	      <span class="w3-white w3-padding-large" id="id_tmEqk0">진앙시 </span>
	    </div>
	  </div>
	  <div class="w3-display-container mySlides w3-animate-opacity" style="display: none;">
	    <img src="" id="id_img1" style="width:100%">
	    <div class="w3-display-middle w3-text-white w3-container w3-padding-32 w3-hide-small">
	       <span class="w3-white w3-padding-large" id="id_mt1">진도 </span>
	      <span class="w3-white w3-padding-large" id="id_loc1">위치 </span>
	      <span class="w3-white w3-padding-large" id="id_tmEqk1">진앙시 </span>
	    </div>
	  </div>
	<button class="w3-button w3-light-grey noselection w3-display-left" onclick="plusDivs(-1)">❮</button>
	<button class="w3-button w3-light-grey noselection w3-display-right" onclick="plusDivs(+1)">❯</button>
	</div>
</div>
<!-- 최근 지진 목록-->
<!-- 드롭다운 리스트-->
<!--  <div class="result_eq_list"> -->
<!--     최근 지진 목록 -->
<!--  </div> -->
 
<!--  <!-- 행동요령--> -->
<!--  <div class="action_tips"> -->
<!--     <h3>행동요령</h3> -->
<!--     <p> -->
<!--     <span>싱황별</span> -->
<!--     <span>장소별</span> -->
<!--     </p> -->
<!--     <div class="action_tips_list1"> -->
<!--         <img src="resources/img/action_tips_img.PNG"> -->
<!--         <img src="resources/img/action_tips_img.PNG"> -->
<!--     </div> -->
    
<!--     <div class="action_tips_list2" style="display: none"> -->
<!--         <img src="resources/img/earthquake_action02%20(2).jpg"> -->
<!--     </div> -->
    
<!--  </div> -->
<!--  <hr> -->
<!--  <h3>통계 자료</h3> -->
<!--  <!-- 통계자료 --> -->
<!--  <div class="data_div"> -->
<!--       <div class="data1L">  -->
<!--            <div id="chart_div1"></div> -->
<!--       </div> -->
<!--       <div class="data1R">  -->
<!--            휴... -->
<!--       </div> -->
       
<!--  </div> -->
 <hr>
 <div class="place">
 <h3>대피소 찾기</h3>
    <select name="sido1" id="sido1"></select>
    <select name="gugun1" id="gugun1"></select>
    <select name="gb" id="gb">
    	<option value="ingb">실내대피소</option>
  		<option value="outgb">옥외대피소</option>
    </select>
    <button class="search_btn" id="btn" style="vertical-align:middle"><span>검색</span></button>
    
    <br>
    <div id="map" style="width:100%;height:500px;">
        
    </div>
    <div class="place_list">
        <table class="place_table">
       
          
        </table>
    </div>
 </div>

 
 
 
 
</div>

<div class="footer">
  <p>Footer</p>
</div>

</body>
</html>
