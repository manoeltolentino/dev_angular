import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [

    { path: 'items', component: ItemComponent},
    { path: '', component: HomeComponent}
];
