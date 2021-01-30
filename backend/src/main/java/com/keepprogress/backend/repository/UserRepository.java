package com.keepprogress.backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.keepprogress.backend.entity.Users;

public interface UserRepository extends CrudRepository<Users, Long> {
	
	List<Users> findByLastName(@Param("lastname") String lastname);
	
	List<Users> findByFirstName(@Param("firstname") String firstname);


}
