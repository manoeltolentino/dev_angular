import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    {path: 'users', component: UserListComponent},
    {path: 'addUser', component: UserFormComponent},
    {path: '', component: UserListComponent}
];
