package com.java.web;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

@Controller
public class MRController {
	
	@Resource(name="hdConf")
	Configuration conf;
	
	@RequestMapping(value="/mrCall1", method = RequestMethod.POST)
	public void mrCall1(HttpServletRequest req, HttpServletResponse resp) throws Exception{
		System.out.println("맵리 시작~지역별 횟수");
		Job job = Job.getInstance(conf,"test");
		
		String URL =  new java.text.SimpleDateFormat("yyyyMMdd_HHmmss").format(new java.util.Date());
				
		URI outputUri = URI.create("/result/"+ URL);
		
		String yFromTo = req.getParameter("yFromTo");
		System.out.println(yFromTo);
		String[] ftArray = yFromTo.split(",");
		
		int yFrom = Integer.parseInt(ftArray[0]);	//~년도 부터
		int yTo = Integer.parseInt(ftArray[1]);	//~까지 
		int year;
		
		URI inputUri;
		
		for (int i = yFrom; i <= yTo; i++) {
			year = i;
			inputUri = URI.create("/input/csv/" + year + ".csv");
			FileInputFormat.addInputPath(job, new Path(inputUri));
		}
		
		//URI inputUri = URI.create("/input/csv/");
		//Path path = new Path(uri);
		
		//FileInputFormat.addInputPath(job, new Path(inputUri));
		FileOutputFormat.setOutputPath(job, new Path(outputUri));
		
		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(TextOutputFormat.class);
		
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		
		job.setJarByClass(this.getClass());
		
		job.setMapperClass(TestMapper1.class);
		job.setReducerClass(TestReducer1.class);
		
		job.waitForCompletion(true);
		
		System.out.println("END~~~~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		
		HashMap<String, Object> resultMap = new HashMap<String,Object>();
		resultMap.put("url", outputUri + "/part-r-00000");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json;charset=utf-8");
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		resp.getWriter().write(json.toString());
		
		}
	
	@RequestMapping(value="/mrCall2", method = RequestMethod.POST)
	public void mrCall2(HttpServletRequest req, HttpServletResponse resp) throws Exception{
		System.out.println("맵리 시작~");
		Job job = Job.getInstance(conf,"test");
		
		String URL =  new java.text.SimpleDateFormat("yyyyMMdd_HHmmss").format(new java.util.Date());
				
		URI outputUri = URI.create("/result/"+ URL);
		
		String yFromTo = req.getParameter("yFromTo");
		System.out.println(yFromTo);
		String[] ftArray = yFromTo.split(",");
		
		int yFrom = Integer.parseInt(ftArray[0]);	//~년도 부터
		int yTo = Integer.parseInt(ftArray[1]);	//~까지 
		int year;
		
		URI inputUri;
		
		for (int i = yFrom; i <= yTo; i++) {
			year = i;
			inputUri = URI.create("/input/csv/" + year + ".csv");
			FileInputFormat.addInputPath(job, new Path(inputUri));
		};
		
		//URI inputUri = URI.create("/input/csv/");
		//Path path = new Path(uri);
		
		//FileInputFormat.addInputPath(job, new Path(inputUri));
		FileOutputFormat.setOutputPath(job, new Path(outputUri));
		
		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(TextOutputFormat.class);
		
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		
		job.setJarByClass(this.getClass());
		
		job.setMapperClass(TestMapper2.class);
		job.setReducerClass(TestReducer2.class);
		
		job.waitForCompletion(true);
		
		System.out.println("END~~~~!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		
		HashMap<String, Object> resultMap = new HashMap<String,Object>();
		resultMap.put("url", outputUri + "/part-r-00000");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json;charset=utf-8");
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		resp.getWriter().write(json.toString());
		
		}
	
	
	@RequestMapping("/File")
	public void File(HttpServletRequest request, HttpServletResponse response)  throws  IOException  {
		String inputFile = request.getParameter("fileNm"); 
		
		URI uri = URI.create(inputFile);
        Path path = new Path(uri);
		FileSystem file = FileSystem.get(uri, conf);
		FSDataInputStream fsis = file.open(path);
		byte[] buffer = new byte[100000];
		int byteRead = 0;
		String result = "";
		while((byteRead = fsis.read(buffer)) > 0) { 
			//System.out.println(new String(buffer, 0, byteRead));
			result = new String(buffer, 0, byteRead);
		}
		
		String[] rows = result.split("\n");
		List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
		for (int j = 0; j < rows.length; j ++) {
			System.out.println("-------------------");
			String row =  rows[j];
			String[] cols = row.split("\t");
			HashMap<String , Object> map = new HashMap<String , Object>();
			for (int c = 0 ; c < cols.length; c ++) {
				System.out.println(cols[c]);
				map.put(c + "",cols[c]);
			}
			list.add(map);
			
		}
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("result", list);
		
		
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json;charset=utf-8");
		response.getWriter().write(json.toString());
		
	}
	
}
