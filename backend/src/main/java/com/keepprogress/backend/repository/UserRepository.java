package com.keepprogress.backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.keepprogress.backend.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
	List<User> findByLastName(@Param("lastname") String lastname);
	
	List<User> findByFirstName(@Param("firstname") String firstname);


}
