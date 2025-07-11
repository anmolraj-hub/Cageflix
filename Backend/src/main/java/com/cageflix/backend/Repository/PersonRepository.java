package com.cageflix.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cageflix.backend.model.Person;

public interface PersonRepository extends JpaRepository<Person, String> {
    Person findByPrimaryNameIgnoreCase(String name);
    Person findBynconstIgnoreCase(String nconst);

    //Person findByPrimaryNameTrimmed(String string);
}