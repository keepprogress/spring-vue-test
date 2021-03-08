package com.keepprogress.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.keepprogress.backend.entity.Product;

//Entity is Product Primary key is Long
public interface ProductRepository extends JpaRepository<Product, Long> {

}
//If you are using Eclipse and Lombok together, there are additional installations steps you need for Lombok.
//To add Lombok support to Eclipse. Follow the steps below:
//1. Download the Lombok JAR file installer from this link:
//https://projectlombok.org/downloads/lombok.jar
//2. Double-click the downloaded JAR file installer to start the installation process.
//Note: Instead of double-click, you can run the installer from the command line. Move to the directory where you downloaded the file.
//java -jar lombok.jar
//
//3. Follow the steps in the installer.
//4. Restart Eclipse.
//—
//If you continue to have problems, you can just run the Spring Boot app outside of the IDE. You can use the command-line.
//1. Open a terminal window / command-prompt window
//2. Move into your project directory
//3. Run the app: mvn spring-boot:run

