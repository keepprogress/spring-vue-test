package com.keepprogress.backend.repository;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.keepprogress.backend.entity.User;

import static org.hamcrest.Matchers.contains;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTest {
	
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private UserRepository users;
	
	private User norbertSiegmund = new User("Norbert", "Siegmund");
	private User KeepProgress = new User ("Keep", "Progress");
	
	@Before
	public void fillSomeDataIntoOurDb() {
		// Add new User to Database
		entityManager.persist(norbertSiegmund);
		entityManager.persist(KeepProgress);
	}
	
	@Test
	public void testFindByLastName() throws Exception {
		// Search for specific User in Database according to lastname
		List<User> userWithLastNameSiegmund = users.findByLastName("Siegmund");
		
		assertThat(userWithLastNameSiegmund, contains(norbertSiegmund));
	}
	
	@Test
	public void testFindByFirstName() throws Exception {
		List<User> userWithFirstNameKeep = users.findByFirstName("Keep");
		
		assertThat(userWithFirstNameKeep, contains(KeepProgress));
	}
}
