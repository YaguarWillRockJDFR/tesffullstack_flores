import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person, PersonService } from '../../services/person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-person.component.html',
})
export class EditPersonComponent implements OnInit {
  personForm!: FormGroup;
  personId?: number;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe((params) => {
      this.personId = params['id'] ? +params['id'] : undefined;
      if (this.personId) {
        this.loadPerson(this.personId);
      }
    });
  }

  initForm(): void {
    this.personForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      puesto: ['', Validators.required],
      sueldo: [0, [Validators.required, Validators.min(0)]],
    });
  }

  loadPerson(id: number): void {
    this.personService.getById(id).subscribe((person) => {
      this.personForm.patchValue(person);
    });
  }

  savePerson(): void {
    if (this.personForm.valid) {
      const personData: Person = this.personForm.value;
      if (this.personId) {
        // Editar
        personData.id = this.personId;
        this.personService.update(personData).subscribe(() => {
          alert('Persona actualizada con éxito');
          this.router.navigate(['/persons']);
        });
      } else {
        // Guardar nuevo
        this.personService.create(personData).subscribe(() => {
          alert('Persona creada con éxito');
          this.router.navigate(['/persons']);
        });
      }
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  cancel(): void {
    this.router.navigate(['/persons']);
  }
}
