package com.rest.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
@Component
public interface todosRep extends JpaRepository<todo, Integer>{

}
