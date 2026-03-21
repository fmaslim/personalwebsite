import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { AppEmployeeCardComponent } from './components/app-employee-card/app-employee-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { Movie2CardComponent } from './components/movie2-card/movie2-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectCardComponent,
    AppEmployeeCardComponent,
    ProductCardComponent,
    BookCardComponent,
    MovieCardComponent,
    Movie2CardComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
