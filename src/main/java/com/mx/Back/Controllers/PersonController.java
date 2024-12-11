package com.mx.Back.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.Back.Models.Person;
import com.mx.Back.Services.PersonService;

@RestController
@RequestMapping("persons")
@CrossOrigin
public class PersonController {

	@Autowired
	PersonService personService;

	@GetMapping("listar")
	public ResponseEntity<List<Person>> getAllPersons() {
		return ResponseEntity.ok(personService.getAllPersons());
	}

	@GetMapping("{id}")
	public ResponseEntity<Optional<Person>> getPersonById(@PathVariable Long id) {
		return ResponseEntity.ok(personService.getPersonById(id));
	}

	@PostMapping("guardar")
	public ResponseEntity<Person> createPerson(@RequestBody Person person) {
		return ResponseEntity.ok(personService.savePerson(person));
	}

	@PutMapping("actualizar")
	public ResponseEntity<Person> updatePerson(@RequestBody Person person) {
		Person updatedPerson = personService.updatePerson(person);
		if (updatedPerson == null) {
			return ResponseEntity.badRequest().build();
		}
		return ResponseEntity.ok(updatedPerson);
	}

	@DeleteMapping("eliminar/{id}")
	public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
		personService.deletePerson(id);
		return ResponseEntity.noContent().build();
	}
}
