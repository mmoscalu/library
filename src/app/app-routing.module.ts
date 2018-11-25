import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'new', component: AddBookComponent},
  {path: 'edit/:id', component: EditBookComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
