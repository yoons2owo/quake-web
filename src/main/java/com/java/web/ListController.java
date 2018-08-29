package com.java.web;

import java.io.IOException;
import java.net.URI;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

@Controller
public class ListController {
	
	@Resource(name="hdConf")
	Configuration conf;
	

	@RequestMapping("/ListRead")
	public void File(HttpServletRequest request, HttpServletResponse response)  throws  IOException  {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		String dateFrom = request.getParameter("dateFrom");
		String dateTo = request.getParameter("dateTo");
		
		String[] yearFrom = dateFrom.split("-");
		String[] yearTo = dateTo.split("-");
		
		String inputPath = "/input/csv/";
		List<String> inputFile = new ArrayList<String>();
		for (int y =  Integer.parseInt(yearTo[0]); y >= Integer.parseInt(yearFrom[0]); y--) {
			inputFile.add(inputPath + y +".csv");
			System.out.println(y);
		}
		
		//String[] inputFile = {"/input/csv/2018.csv","/input/csv/2017.csv"};//겟파라미터
		
		
		
		

		String startmt = request.getParameter("startmt");
		String endmt = request.getParameter("endmt");
		Float[] mt = { Float.parseFloat(startmt),  Float.parseFloat(endmt)};
		String searchKey = request.getParameter("searchKey");
		
		System.out.println(dateFrom);
		System.out.println(dateTo);
		System.out.println(startmt);
		System.out.println(endmt);
		System.out.println(searchKey);
		
		String[] date = {dateFrom,dateTo};//겟파라미터
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date dFrom = null;
		Date dTo = null;
		
		try {
			dFrom = format.parse(date[0]);
			dTo = format.parse(date[1]);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
		
		for (int i = 0; i < inputFile.size(); i++) {
		
			URI uri = URI.create(inputFile.get(i));
	        Path path = new Path(uri);
			FileSystem file = FileSystem.get(uri, conf);
			FSDataInputStream fsis = file.open(path);
			byte[] buffer = new byte[100000000];
			int byteRead = 0;
			String result = "";
			while((byteRead = fsis.read(buffer)) > 0) {
				result = new String(buffer, 0, byteRead);
			}
			
			String[] rows = result.split("\n");
			
			
			for (int j = 0; j < rows.length; j ++) {
				String row =  rows[j];
				String[] cols = row.split(",");
				
				String[] searchArray = cols[6].split(" ");
				Date colD = null;
				try {
					colD = format.parse(cols[1]);
					
				} catch (ParseException e) {
					e.printStackTrace();
				}
				boolean success = false;
				//기간
				if(colD.compareTo(dFrom) > 0 && colD.compareTo(dTo) < 0) {

					if(Float.parseFloat(cols[2]) > mt[0] && Float.parseFloat(cols[2]) < mt[1]) {
						
						if(searchKey.equals("")) {
							success = true;
							System.out.println("=====================");
							HashMap<String , Object> map = new HashMap<String , Object>();
							
							for (int c = 0 ; c < cols.length; c ++) {
								System.out.println(cols[c]);
								map.put(c + "",cols[c]);
								
							}
							list.add(map);
						}else {
						
						for(int z = 0; z < searchArray.length; z++) {
							if(searchArray[z].equals(searchKey)) {
								success = true;
								System.out.println("=====================");
								HashMap<String , Object> map = new HashMap<String , Object>();
								
								for (int c = 0 ; c < cols.length; c ++) {
									System.out.println(cols[c]);
									map.put(c + "",cols[c]);
									
								}
								list.add(map);
							}
						}
						}
					}
				}else {
					
				}
			}
			
		}
		resultMap.put("result", list);
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json;charset=utf-8");
		response.getWriter().write(json.toString());
		
		}
	
}
