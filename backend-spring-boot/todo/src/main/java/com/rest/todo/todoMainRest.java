package com.rest.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import ch.qos.logback.core.joran.spi.NoAutoStart;

import java.net.URI;
import java.util.*;


@RestController
public class todoMainRest {
	@Autowired
	listTodos lt;
	@Autowired
	todosRep tr;
	
	
	@GetMapping(path="/todos1")
	public message1 helloMessage() {
		return new message1("hello");
		
	}
	@GetMapping(path="/authenticate")
	public String aut() {
		return "authenticate";
		
	}
	@GetMapping(path="/todos1/{data}")
	public message1 hell(@PathVariable String data) {
		return new message1("here"+data);
		
	}
	
	@GetMapping(path="/todos1/{username}/list")
	public List<todo> getAll(@PathVariable String username){
		return tr.findAll();
		
				
		
	}
	@GetMapping(path="/todos1/{username}/list/{id}")
	public todo getById(@PathVariable int id,@PathVariable String username) {
		return tr.findById(id).get();
		
				
		
		
	}
	@DeleteMapping(path="/todos1/{username}/list/{id}")
	public ResponseEntity<todo> deleteIT(@PathVariable int id,@PathVariable String username){
	
		tr.deleteById(id);
		
		return ResponseEntity.accepted().build();
		
//		return ResponseEntity.noContent().build();
		
	}
	@PutMapping(path="/todos1/{username}/list/{id}")
	public void updateTodo(@PathVariable int id,@RequestBody todo tod1){
//		lt.updateTod(id,tod1);
		tr.save(tod1);
		
		
	
//		return ResponseEntity.accepted().build();
		
	}
	@PostMapping(path="/todos1/{username}/list")
	public ResponseEntity<todo> addTodo(@PathVariable String username,@RequestBody todo tod1){ 
//		lt.addTod(tod1);
		tr.save(tod1);
		
		URI loc=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tod1.id).toUri();
		
		
		return ResponseEntity.created(loc).build();
		
	}
	@GetMapping(path="/basic")
	public String basicAtuh() {
		return "temper";
			
	}

}
