package com.java.web;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

@Controller
public class MapController {
	
	@RequestMapping("/getMap")
	public void getMap(HttpServletRequest request ,HttpServletResponse response) throws IOException {
		String sido = request.getParameter("sido");
		String gugun = request.getParameter("gugun");
		String gb = request.getParameter("gb");
		
		System.out.println(sido + gugun);
		
		BufferedReader br = null;
        String line;
        String cvsSplitBy = ",";
        String csvFile = "";
        
        if(gb.equals("ingb")) {
        	csvFile = "/resources/css/mapdata1.csv";
        }else if(gb.equals("outgb")){
        	csvFile = "/resources/css/mapdata2.csv";
        }
        
        
        String url2= request.getRequestURL().toString();
        URL url1 = new URL(url2.replace("getMap", csvFile));
        InputStream inputStream = url1.openStream();
        
        HashMap<String, Object> resultMap = new HashMap<String, Object>();
        List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
        
        //실내 대피소
        try {
	            br = new BufferedReader(new InputStreamReader(inputStream, "euc-kr"));
	            //실내 대피소
	            while ((line = br.readLine()) != null) {
	            	 HashMap<String , Object> map = new HashMap<String , Object>();
	
	                // use comma as separator
	                String[] column = line.split(cvsSplitBy);
	                
	                if(column[0].equals(sido) && column[1].equals(gugun)) {
	                	
	                		map.put("시설명", column[2]);
	                        map.put("주소", column[3]);
	                        map.put("면적", column[4]);
	                        if (column.length < 6) {
	                        	map.put("위도", "");
	                            map.put("경도", ""); 
	                        	
	                        }else {
	                        	map.put("위도", column[5]);
	                            map.put("경도", column[6]); 
	                        } 
	                       
	                        list.add(map);
	                }
	                
	            } System.out.println(list);
	    		resultMap.put("mapResult", list);
	            
        	
    		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
    		response.setCharacterEncoding("UTF-8");
    		response.setContentType("text/json;charset=utf-8");
    		response.getWriter().write(json.toString());


        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
	
	}
}
