import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../../services/person.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-person.component.html',
})
export class ListPersonComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.personService.getAll().subscribe((data) => {
      this.persons = data;
      if (this.persons.length === 0) {
        alert('No hay personas registradas en la base de datos.');
      }
    });
  }

  editPerson(id: number | undefined): void {
    if (id !== undefined) {
      console.log('Editando persona');
      localStorage.setItem('personId', id.toString());
      this.router.navigate([`/persons/edit/${id}`]);
    } else {
      console.error('El ID de la persona es undefined.');
    }
  }
  
  deletePerson(id: number | undefined): void {
    if (id !== undefined) {
      console.log('Eliminando persona');
      if (confirm('¿Estás seguro de que deseas eliminar esta persona?')) {
        this.personService.delete(id).subscribe(() => {
          this.loadPersons();
        });
      }
    } else {
      console.error('El ID de la persona es undefined.');
    }
  }  

  trackByPersonId(index: number, person: Person): number {
    return person.id ?? index; 
  }  
}
