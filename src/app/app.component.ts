import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Person, PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  persons: Person[] = [];

  constructor(private personService: PersonService) { };

  router = inject(Router);

  ngOnInit(): void {
    this.personService.getAll().subscribe((data) => {
      this.persons = data;
      console.log(this.persons);
    });
  }


  mostrarPersonas(): void {
    this.router.navigate(['/persons']);
  }

  registrarPersona(): void {
    this.router.navigate(['/persons/add']);
  }
}
