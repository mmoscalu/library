import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataBaseService } from './services/data-base.service';
import { ServerService } from './services/server.service';
import { AppRoutingModule } from './app-routing.module';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { HeaderComponent } from './components/header/header.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ShowBookComponent } from './components/show-book/show-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NavBarComponent,
    FooterComponent,
    AddBookComponent,
    HeaderComponent,
    EditBookComponent,
    ShowBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataBaseService),
    TableModule,
    ButtonModule,
    MenubarModule,
    FormsModule,
    InputTextModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
