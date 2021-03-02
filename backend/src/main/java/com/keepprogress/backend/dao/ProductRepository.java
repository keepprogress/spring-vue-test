package com.keepprogress.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.keepprogress.backend.entity.Product;

//Entity is Product Primary key is Long
public interface ProductRepository extends JpaRepository<Product, Long> {

}
