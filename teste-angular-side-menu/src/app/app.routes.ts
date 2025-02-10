import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'analytics', component: SidenavComponent},
    {path: '', component: AppComponent}
];
