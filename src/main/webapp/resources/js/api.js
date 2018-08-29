$(document).ready(function(){
	
	//오늘 날짜 구하기
	var Now = new Date();
	var NowTime = Now.getFullYear().toString() + "0";
	NowTime += (parseInt(Now.getMonth()) + 1).toString() ;
	NowTime += (Now.getDate() - 3 ).toString();	//최근 3일 간의 정보만 제공

	console.log(NowTime);
	
	var url = "http://newsky2.kma.go.kr/service/ErthqkInfoService/EarthquakeReport?"
			+ "serviceKey=yXbDZnM0ZGC2aYtdZ9x%2FbDBuM9MDMOu5Rh7xsE113MV9UKoaEB9Vie2m4SdUpn9UlerfqRcqw1zC9gUzFwXB9g%3D%3D"
			+ "&numOfRows=10&pageSize=10&pageNo=1&startPage=1&_type=json&fromTmFc=";
	
    $.ajax({
       url : url + NowTime ,
		type: "get",
		dataType: "json",
       success : function(result) {
        var data = result.response.body.items.item;
        console.log(data);
        
        for(var i=0; i < data.length; i++) {
        	var loc = data[i]["loc"];	//위치
        	$("#id_loc"+i).append(loc);
        	var mt = data[i]["mt"];	//진도
        	$("#id_mt"+i).append(mt);
        	var tmEqk = data[i]["tmEqk"];	//진앙시
        	$("#id_tmEqk"+i).append(tmEqk);
        	var img = data[i]["img"];
        	$("#id_img"+i).attr("src",img);
        	
        }
        
       }
    });
 });