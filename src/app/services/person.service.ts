import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

export interface Person {
  id?: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string; // Formato: 'YYYY-MM-DD'
  puesto: string;
  sueldo: number;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/listar`);
  }

  getById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/guardar`, person);
  }

  update(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/actualizar`, person);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
