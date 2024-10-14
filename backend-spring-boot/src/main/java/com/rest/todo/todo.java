package com.rest.todo;

import java.time.LocalDate;

public class todo {
	int id;
	boolean done;
	String des;
	LocalDate ld;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public String getDes() {
		return des;
	}
	public void setDes(String des) {
		this.des = des;
	}
	public LocalDate getLd() {
		return ld;
	}
	public void setLd(LocalDate ld) {
		this.ld = ld;
	}
	public todo(int id, boolean done, String des, LocalDate ld) {
		super();
		this.id = id;
		this.done = done;
		this.des = des;
		this.ld = ld;
	}
	public String toString() {
		return id+" "+done+" "+des+" "+ld;
		
	}
}
