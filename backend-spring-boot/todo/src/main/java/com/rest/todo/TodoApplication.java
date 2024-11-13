package com.rest.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication

public class TodoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfi() {
			return new WebMvcConfigurer() {
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**")
					.allowedMethods("*")
					.allowedOrigins("http://localhost:3000/");	
					
				}
			};
	}
//			@Bean
//			public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//				http.authorizeHttpRequests(
//						auth->auth
//						.requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
//						.anyRequest().authenticated()
//						
//						);
//				http.httpBasic(Customizer.withDefaults());
//				http.sessionManagement(
//						session-> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//						);
//				http.csrf(AbstractHttpConfigurer::disable);
//				
//				
//				return http.build();
//				
//			}
//	

}
