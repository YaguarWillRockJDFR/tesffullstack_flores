import { Routes } from '@angular/router';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

export const routes: Routes = [
    { path: '', redirectTo: 'persons', pathMatch: 'full' },
    { path: 'persons', component: ListPersonComponent },
    { path: 'persons/edit/:id', component: EditPersonComponent },
    { path: 'persons/add', component: EditPersonComponent },
];
