package com.keepprogress.backend.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="product_categor"
		+ "y")
// @Data -- known bug
@Getter
@Setter

public class ProductCategory {
	
	// due to portability for running on both MySQL and Postgresql
	// fix Hibernate sequence issue with native identifier
	// see https://vladmihalcea.com/why-should-not-use-the-auto-jpa-generationtype-with-mysql-and-hibernate/
	// https://www.itread01.com/content/1549334546.html
	@Id
	@GeneratedValue(
			strategy = GenerationType.AUTO,
			generator="native"
	)
	@GenericGenerator(
			name="native",
			strategy = "native"
	)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "category_name")
	private String categoryName;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
	private Set<Product> products;
}
