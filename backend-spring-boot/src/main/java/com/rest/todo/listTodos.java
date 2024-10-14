package com.rest.todo;
import java.time.LocalDate;
import java.util.*;

import org.springframework.stereotype.Component;

@Component
public class listTodos {
	public static List<todo> l1=new ArrayList<>();
	static {
		l1.add(new todo(1,false,"this is to be done a lot",LocalDate.now().plusYears(1)));
		l1.add(new todo(2,false,"this is to be done a lot",LocalDate.now().plusYears(1)));
		l1.add(new todo(3,false,"this is to be done a lot",LocalDate.now().plusYears(1)));
	}
	
	
	public todo addTod(todo t1) {
		l1.add(t1);
		return t1;
		
	}
	public List<todo> getAll(){
		return l1;
	}
	
	public todo findById(int id) {
		for(int i=0;i<l1.size();i++) {
			if(l1.get(i).id==id) {
				return l1.get(i);
				
			}
		}
		return null;
		
	}
	public void deleteById(int id) {
		for(int i=0;i<l1.size();i++) {
			if(l1.get(i).id==id) {
				l1.remove(i);
				break;
				
			}
		}
		
	}
	public void updateTod(int id,todo tod1) {
		for(int i=0;i<l1.size();i++) {
			if(l1.get(i).id==id) {
				l1.get(i).setDes(tod1.des);
				l1.get(i).setDone(tod1.done);
				l1.get(i).setLd(tod1.ld);
			}
		}
	}
	
}
