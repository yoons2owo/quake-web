package com.java.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		return "index";
	}
	@RequestMapping("/mapreduce")
	public String mr() {
		return "mapreduce";
	}
	
	@RequestMapping("/list")
	public String list() {
		return "list";
	}
	
	
	
	@RequestMapping("/getApi")
	public static void readJsonFromUrl(HttpServletRequest request, HttpServletResponse response) throws IOException, JSONException {
		String url = "http://newsky2.kma.go.kr/service/ErthqkInfoService/EarthquakeReport?"
				+ "serviceKey=yXbDZnM0ZGC2aYtdZ9x%2FbDBuM9MDMOu5Rh7xsE113MV9UKoaEB9Vie2m4SdUpn9UlerfqRcqw1zC9gUzFwXB9g%3D%3D"
				+ "&numOfRows=10&pageSize=10&pageNo=1&startPage=1&_type=json&fromTmFc=";
		
		String NowTime = request.getParameter("NowTime");
	    InputStream is = new URL(url+NowTime).openStream();
	    try {
	      BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
	      String jsonText = readAll(rd);
	      JSONObject json = new JSONObject(jsonText);
	      System.out.println(json);
		  response.setCharacterEncoding("UTF-8");
		  response.setContentType("text/json;charset=utf-8");
		  response.getWriter().write(json.toString());
	    } finally {
	      is.close();
	    }
	  }

	 private static String readAll(Reader rd) throws IOException {
		StringBuilder sb = new StringBuilder();
	    int cp;
	    while ((cp = rd.read()) != -1) {
	      sb.append((char) cp);
	    }
	    return sb.toString();
	}
	

}
	

