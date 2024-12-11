package com.mx.Back.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mx.Back.Models.Person;
import com.mx.Back.Repositories.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository personRepository;

	public List<Person> getAllPersons() {
		return personRepository.findAll();
	}

	public Optional<Person> getPersonById(Long id) {
		return personRepository.findById(id);
	}

	public Person savePerson(Person person) {
		return personRepository.save(person);
	}

	public Person updatePerson(Person person) {
		if (personRepository.existsById(person.getId())) {
			return personRepository.save(person);
		}
		return null;
	}

	public void deletePerson(Long id) {
		if (personRepository.existsById(id)) {
			personRepository.deleteById(id);
		}
	}
}
