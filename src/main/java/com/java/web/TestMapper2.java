package com.java.web;

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class TestMapper2 extends Mapper<LongWritable, Text, Text, IntWritable> {
	
	@Override
	protected void map(LongWritable key, Text value, Context context)
			throws IOException, InterruptedException {
		bean b = new bean(value);
		Text outputKey = new Text();
		int mt =(int) Float.parseFloat(b.getMt());
		//outputKey.set(b.getLoc() + b.getDate());
		String[] year = b.getDate().split("-");
		outputKey.set(year[0] +"\t"+ Integer.toString(mt));
		context.write(outputKey, new IntWritable(1));
	}
}
