package com.java.web;

import org.apache.hadoop.io.Text;

public class bean {

	String loc;
	String mt ;
	String date;
	
	public bean(Text value) {
		try {
			System.out.println(value);
			String [] columns = value.toString().split(",");
			this.date = columns[1];
			this.mt = columns[2];
			
			String [] locArray = columns[6].toString().split(" ");
			this.loc = locArray[0] + locArray[1];
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	public void setLoc(String loc) {
		this.loc = loc;
	}

	public void setMt(String mt) {
		this.mt = mt;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
	

	public String getLoc() {
		return loc;
	}

	public String getMt() { 
		return mt;
	}

	public String getDate() {
		return date;
	}
	
	
	
}
