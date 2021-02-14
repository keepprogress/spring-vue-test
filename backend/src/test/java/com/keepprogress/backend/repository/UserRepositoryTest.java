package com.keepprogress.backend.repository;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.keepprogress.backend.entity.Users;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.MatcherAssert.assertThat;

@DataJpaTest
public class UserRepositoryTest {
	
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private UserRepository users;
	
	private final Users norbertSiegmund = new Users("Norbert", "Siegmund");
	private final Users KeepProgress = new Users ("Keep", "Progress");
	
	@BeforeEach
	public void fillSomeDataIntoOurDb() {
		// Add new User to Database
		entityManager.persist(norbertSiegmund);
		entityManager.persist(KeepProgress);
	}
	
	@Test
	public void testFindByLastName() throws Exception {
		// Search for specific User in Database according to lastname
		List<Users> userWithLastNameSiegmund = users.findByLastName("Siegmund");
		
		assertThat(userWithLastNameSiegmund, contains(norbertSiegmund));
	}
	
	@Test
	public void testFindByFirstName() throws Exception {
		List<Users> userWithFirstNameKeep = users.findByFirstName("Keep");
		
		assertThat(userWithFirstNameKeep, contains(KeepProgress));
	}
}
