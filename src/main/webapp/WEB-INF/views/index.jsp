<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE HTML>
<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>동공지진</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Free HTML5 Website Template by gettemplates.co" />
	<meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
	<meta name="author" content="gettemplates.co" />

  	<!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<!-- <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700' rel='stylesheet' type='text/css'> -->
<!-- 	<script src="resources/js/jquery.animateNumber.min.js"></script> -->
	<link href="https://fonts.googleapis.com/css?family=Gugi|Nanum+Gothic&amp;subset=korean" rel="stylesheet">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="resources/css/rSlider.min.css">
	<script src="resources/js/rSlider.min.js"></script>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dc00a5485c8f690d8ebb8be4f0b6bf5e&libraries=services"></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	
	<link rel="stylesheet" type="text/css"  media="only screen and (max-width: 1200px)" href="resources/css/tab.css">
   <link rel="stylesheet" type="text/css"  media="only screen and (max-width: 750px)" href="resources/css/phone.css">
	
	
	<!-- Animate.css -->
	<link rel="stylesheet" href="resources/css/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="resources/css/icomoon.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="resources/css/bootstrap.css">

	<!-- Magnific Popup -->
	<link rel="stylesheet" href="resources/css/magnific-popup.css">

	<!-- Owl Carousel  -->
	<link rel="stylesheet" href="resources/css/owl.carousel.min.css">
	<link rel="stylesheet" href="resources/css/owl.theme.default.min.css">

	<!-- Theme style  -->
	<link rel="stylesheet" href="resources/css/style.css">

	<!-- Modernizr JS -->
	<script src="resources/js/modernizr-2.6.2.min.js"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<script type="text/javascript">
       
    
    </script>
	<body>
		
	<div class="gtco-loader"></div>
	
	<div id="page">
	<nav class="gtco-nav" role="navigation">
		<div class="gtco-container">
			<div class="row">
				<div class="col-xs-2">
					<div id="gtco-logo"><a href=""><img src="resources/images/homeicon.png" width="30px"></a></div>
				</div>
				<div class="col-xs-8 text-center menu-1">
					<ul>
						<li class="active"><a href="index.html">Home</a></li>
						<li id="href1"><a href="">About</a></li>
						<li id="href2"><a href="">최근지진</a></li>
						<li id="href3"><a href="">국내지진</a></li>
						<li id="href4"><a href="">데이터분석</a></li>
						<li id="href5"><a href="">대피소찾기</a></li>
					</ul>
				</div>
<!-- 				<div class="col-xs-2 text-right hidden-xs menu-2"> -->
<!-- 					<ul> -->
<!-- 						<li class="btn-cta"><a href="#"><span>Login</span></a></li> -->
<!-- 					</ul> -->
<!-- 				</div> -->
			</div>
			
		</div>
	</nav>

	<header id="gtco-header" class="gtco-cover" role="banner" style="background-image:url(resources/images/img_bg_1.jpg);">
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
					<div class="display-t">
						<div class="display-tc animate-box" data-animate-effect="fadeIn">
							<h1>동 공 지 진</h1>
<!-- 							<h2>국내 지진 정보 제공 사이트 </h2> -->
<!-- 							<p><a href="#" class="btn btn-default">Get Started</a></p> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	
	
	<div id="gtco-features">
		<div class="gtco-container">
		<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center gtco-heading">
					<h2>About</h2>
					<!--<p></p>-->
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-sm-4">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="icon-clock"></i>
						</span>
						<h3>최근지진</h3>
						<p>국내,외의 지진 발생 상황을 실시간으로 나타냅니다.</p>
						<p id ="href6"><span class="btn btn-primary">More</span></p>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="icon-bar-graph"></i>
						</span>
						<h3> 데이터 조회 · 분석</h3>
						<p>국내지진 목록 · 데이터 분석 자료를 제공합니다.</p>
						<p id ="href7"><a href="" class="btn btn-primary">More</a></p>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="icon-box"></i>
						</span>
						<h3>대피소 조회</h3>
						<p>전국의 지진 대피소 위치 및 상세 정보를 제공합니다.</p>
						<p id ="href8"><a href="" class="btn btn-primary">More</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="gtco-features-2">
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center gtco-heading">
					<h2>최근 지진</h2>
					<p>최근 3일 이내의 국내,외 지진 발생 기록 조회(기상청 제공)</p>
				</div>
			</div>
			<div class="row" id ="apiDiv">

				<button class="w3-button w3-light-grey noselection w3-display-left" onclick="plusDivs(-1)">❮</button>
	            <button class="w3-button w3-light-grey noselection w3-display-right" onclick="plusDivs(+1)">❯</button>
			</div>
		</div>
	</div>

	<div id="gtco-counter" class="gtco-bg gtco-counter" style="background-image:url(resources/images/img_bg_2.jpg);">
		<div class="gtco-container">
		<div class="row animate-box">
                        <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2 style="font-size: 35px; color: white; padding-top: 20px" >국내지진 목록 </h2>
                        </div>
                    </div>
			<div class="row">
			
				<div class="leftD" id="leftD" >
				
                    <div class="row animate-box">
                        <div class="col-md-12">

                            <form class="form-inline">
                                    <div class="form-group" id="listFont">
                                       <p>
                                           <span>발생기간 &nbsp</span>
								<input type="date" class="form-control" id="dateFrom_id" placeholder="date"  min="1990-01-01" name="dateFrom"  value="2018-01-01" >
                                <span>~</span>    
								<input type="date" class="form-control" id="dateTo_id" placeholder="date" min="1990-01-01" min="1990-01-01" max="" name="dateTo">
								
                               </p>
                               <p>
                                   
                        
                               <span>규모범위 </span>
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
                                 </p>
                                 <p>
                                 <span>검색어&nbsp&nbsp&nbsp&nbsp&nbsp </span>
								<input type="text" class="form-control" id="searchKey" name="keyword" placeholder="ex) 서울, 경기" >
								</p>
								<p>
								<input type="button" class="btn btn-default btn-block" id="search" value="검색하기"></input></p>

							

                                    </div>
                                    
                              
                            </form>
                        </div>
			        </div>
			        
			        
				
				</div>
				 	<div class="countDiv" id="resultCountDiv">

					</div>
			</div>
		</div>
	</div>
	<div id="place_list_div" style="display: none;">
		<div id="gtco-services" >
			<div class="gtco-container">
				<div>
				<div class="mapDivR"> 
					<div class="place_list">
				        <table class="place_table2">
				       
				          
				        </table>
					</div>
				
					<div class="page_list"></div>
					
				</div>
				
				<div class="mapDivL">
					<div id="listmap" style="width:100%;height:500px;"></div>
				</div>
					
			</div>
		</div>
</div>
	</div>




<!-- 	<div id="gtco-testimonial"> -->
<!-- 		<div class="gtco-container"> -->
<!-- 			 <div class="row"> -->
<!-- 				<div class="row animate-box"> -->
<!-- 					<div class="col-md-8 col-md-offset-2 text-center gtco-heading"> -->
<!-- 						<h2>Testimonial</h2> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 				<div class="row animate-box"> -->
					
				
<!-- 					<div class="owl-carousel owl-carousel-fullwidth "> -->
<!-- 						<div class="item"> -->
<!-- 							<div class="testimony-slide active text-center"> -->
<!-- 								<figure> -->
<!-- 									<img src="resources/images/person_1.jpg" alt="user"> -->
<!-- 								</figure> -->
<!-- 								<span>Jean Doe, via <a href="#" class="twitter">Twitter</a></span> -->
<!-- 								<blockquote> -->
<!-- 									<p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p> -->
<!-- 								</blockquote> -->
<!-- 							</div> -->
<!-- 						</div> -->
<!-- 						<div class="item"> -->
<!-- 							<div class="testimony-slide active text-center"> -->
<!-- 								<figure> -->
<!-- 									<img src="resources/images/person_2.jpg" alt="user"> -->
<!-- 								</figure> -->
<!-- 								<span>John Doe, via <a href="#" class="twitter">Twitter</a></span> -->
<!-- 								<blockquote> -->
<!-- 									<p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p> -->
<!-- 								</blockquote> -->
<!-- 							</div> -->
<!-- 						</div> -->
<!-- 						<div class="item"> -->
<!-- 							<div class="testimony-slide active text-center"> -->
<!-- 								<figure> -->
<!-- 									<img src="resources/images/person_3.jpg" alt="user"> -->
<!-- 								</figure> -->
<!-- 								<span>John Doe, via <a href="#" class="twitter">Twitter</a></span> -->
<!-- 								<blockquote> -->
<!-- 									<p>&ldquo;Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p> -->
<!-- 								</blockquote> -->
<!-- 							</div> -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			 </div> --> 
<!-- 		</div> -->
<!-- 	</div> -->
<hr>
	<div id="gtco-services" class="aDivHref">
		<div class="gtco-container">
			
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center gtco-heading">
					<h2>데이터 분석</h2>
					<div class="sliderDiv"><input type="text" id="slider" class="slider"></div>
				</div>
			</div>
        
        <div class="row animate-box" id="dataAdiv">
				<div class="col-md-4 col-sm-4" >
                    <button type="submit" id="dataA1" class="btn btn-default btn-block">지역별</button></div>
                    
               <div class="col-md-4 col-sm-4" >
                    <button type="submit" id="dataA2" class="btn btn-default btn-block">규모별</button>
                </div>
		</div>


        
        
			<div class="row" style="display: none; height: 600px" id="aResult">
				
				<div class="gtco-tabs">
					<ul class="gtco-tab-nav">
						<li id = "li1" class="active"><a href="#" data-tab="1"><span class="icon visible-xs"><i class="icon-command"></i></span><span class="hidden-xs">Pie Chart</span></a></li>
						<li id = "li2"><a href="#" data-tab="2"><span class="icon visible-xs"><i class="icon-bar-graph"></i></span><span class="hidden-xs">Bar Chart</span></a></li>
						<li id = "li3"><a href="#" data-tab="3"><span class="icon visible-xs"><i class="icon-bag"></i></span><span class="hidden-xs">Column Chart</span></a></li>
						<li id = "li4"><a href="#" data-tab="4"><span class="icon visible-xs"><i class="icon-box"></i></span><span class="hidden-xs">Word Tree</span></a></li>
					</ul>

					<!-- Tabs -->
					<div class="gtco-tab-content-wrap" style="top: 10px; " id="aResultDiv2">
						<div class="gtco-tab-content tab-content active" data-tab-content="1" id="resultDiv1">
								<div id="piechart" class="resultDiv3"></div>
								<div id="map1"  class="resultDiv3"></div>
						</div>

						<div class="gtco-tab-content tab-content" data-tab-content="2">
								 <div id="barchart"  class="resultDiv3"></div>
								<div id="map2" class="resultDiv3"></div>
						</div>

						<div class="gtco-tab-content tab-content" data-tab-content="3">
								 <div id="columnchart"  class="resultDiv3"></div>
								<div id="map3" class="resultDiv3"></div>
						</div>

						<div class="gtco-tab-content tab-content" data-tab-content="4">
								 <div id="wordtree_basic"  class="resultDiv3"></div>
								<div id="map4"  class="resultDiv3"></div>
						</div>

					</div>

				</div>
			</div>
		</div>
	</div>


	<div id="gtco-started">
		<div class="gtco-container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center gtco-heading">
					<h2>대피소 찾기</h2>
				</div>
			</div>
			<div class="row animate-box">
				<div class="col-md-12">
				
						<div class="col-md-4 col-sm-4">
							<div class="form-group">
								<select name="sido1" id="sido1" ></select>
							</div>
						</div>
						<div class="col-md-4 col-sm-4">
							<div class="form-group">
								<select name="gugun1" id="gugun1"></select>
							</div>
						</div>
						<div class="col-md-4 col-sm-4">
							<div class="form-group">
								<select name="gb" id="gb">
                                    <option value="ingb">실내대피소</option>
                                    <option value="outgb">옥외대피소</option>
                                </select>
								
							</div>
						</div>
						
						<div class="col-md-4 col-sm-4" id="mapSearchDiv">
							<input type="button" id="shelterSearch" class="btn btn-default btn-block" value="검색"></button>
						</div>
					
				</div>
			</div>
		</div>
	</div>
	
	<div id="shelterDiv">
	<div id="shelterMap" style="width:100%;height:500px;"></div>
	    <div class="shelterList">
	        <table class="shelterTable"></table>
	    </div>
	    <div class="page_list2"></div>
	</div>

	<footer id="gtco-footer" role="contentinfo">
		<div class="gtco-container">
			<div class="row row-pb-md">
				<div class="col-md-4 gtco-widget">
				
					<h3 style="font-family: 'Nanum Gothic', sans-serif; font-weight: bold; font-size: 17px">동공지진</h3>
					<P>
					국내지진 자료  · 지진정보조회 API  <a href="http://www.weather.go.kr/weather/main.jsp"> 기상청</a><br>
					대피소 자료  <a href="https://data.mpss.go.kr"> 행정안전부</a>
					</P>
					<p >
						<small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
						<small class="block">Designed by <a href="http://gettemplates.co/" target="_blank">GetTemplates.co</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
					</p>
					
				</div>
				<div class="col-md-6 gtco-widget" style="float: right">
					<div class="gtco-contact-info">
						<h3>Contact Information</h3>
						<ul>
<!-- 							<li class="address">서울시 금천구 가산디지털2로 115 <br>구디아카데미 </li> -->
							<li class="phone"><a href="tel://01030129063">+ 82 10 3012 9063</a></li>
							<li class="email"><a href="mailto:kke022u@naver.com">kke022u@naver.com</a></li>
							<li class="url"><a href="http://gettemplates.co">포폴사이트</a></li>
							<li class="git"><a href="https://github.com/kke022u">https://github.com/kke022u</a></li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
	</div>
	
	<!-- jQuery -->
	<script src="resources/js/jquery.min.js"></script>
	
	<!-- jQuery Easing -->
	<script src="resources/js/jquery.easing.1.3.js"></script>
	<!-- Bootstrap -->
	<script src="resources/js/bootstrap.min.js"></script>
	<!-- Waypoints -->
	<script src="resources/js/jquery.waypoints.min.js"></script>
	<!-- Carousel -->
	<script src="resources/js/owl.carousel.min.js"></script>
	<!-- countTo -->
	<script src="resources/js/jquery.countTo.js"></script>
	<!-- Magnific Popup -->
	<script src="resources/js/jquery.magnific-popup.min.js"></script>
	<script src="resources/js/magnific-popup-options.js"></script>
	<!-- Main -->
	<script src="resources/js/main.js"></script>
	<div class="wrap-loading display-none">
	    <div><img src="resources/images/loader.gif" /></div>
	</div>
	</body>
</html>



