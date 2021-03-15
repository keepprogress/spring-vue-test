package com.keepprogress.backend.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Entity
@Table(name="product")
@Data
public class Product {
	
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

	@ManyToOne
	@JoinColumn(name = "category_id", nullable = false)
	private ProductCategory category;
	
	@Column(name="title")
	private String title;
	
	@Column(name="content")
	private String content;
	
	@Column(name="description")
	private String description;
	
	@Column(name="image_url")
	private String imageUrl;
	
	@Column(name="is_enabled")
	private boolean is_enabled;
	
	@Column(name="num")
	private int num;
	
	@Column(name="origin_price")
	private BigDecimal origin_price;
	
	@Column(name="price")
	private int price;
	
	@Column(name="unit")
	private String unit;
	
	@Column(name="date_created")
	@CreationTimestamp
	private Date dateCreated;
	
	@Column(name="last_updated")
	@CreationTimestamp
	private Date lastUpdated;
	
}
