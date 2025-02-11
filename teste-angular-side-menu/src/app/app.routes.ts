import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'analytics', component: HomeComponent},
    {path: '', component: AppComponent}
];
