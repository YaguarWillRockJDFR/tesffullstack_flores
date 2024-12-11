package com.mx.Back.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.Back.Models.Person;

public interface PersonRepository extends JpaRepository<Person, Long>{

}
