package com.keepprogress.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.keepprogress.backend.entity.User;
import com.keepprogress.backend.exception.UserNotFoundException;
import com.keepprogress.backend.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController()
@RequestMapping("/api")
public class BackendController {

    private static final Logger LOG = LoggerFactory.getLogger(BackendController.class);

    public static final String HELLO_TEXT = "Hello from Spring Boot Backend!";
    
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(path = "/hello")
    @ResponseBody 
    public String sayHello() {
        LOG.info("GET called on /hello resource");
        return HELLO_TEXT;
    }
    
    @RequestMapping(path = "/user/{lastName}/{firstName}", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public long addNewUser (@PathVariable("lastName") String lastName, @PathVariable("firstName") String firstName) {
        User savedUser = userRepository.save(new User(firstName, lastName));

        LOG.info(savedUser.toString() + " successfully saved into DB");

        return savedUser.getId();
    }
    
    @GetMapping("/user{id}")
    @ResponseBody 
    public User getUserById(@PathVariable("id") long id) {
    	return userRepository.findById(id).map(user -> {
    		LOG.info("Reading user with id" + id + "from database.");
    		return user;
    	}).orElseThrow(() -> new UserNotFoundException("The user with the id " + id + "couldn't be found in the database."));
    }
    
    // Forwards all routes to FrontEnd except: '/', '/index.html', '/api', '/api/**'
    // Required because of 'mode: history' usage in frontend routing, see README for further details
    @RequestMapping(value = "{_:^(?!index\\.html|api).*$}")
    public String redirectApi() {
        LOG.info("URL entered directly into the Browser, so we need to redirect...");
        return "forward:/";
    }
}