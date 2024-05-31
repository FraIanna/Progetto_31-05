import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/MainComponents/navbar/navbar.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { CompletedComponent } from './Components/pages/completed/completed.component';
import { UsersComponent } from './Components/pages/users/users.component';
import { Page404Component } from './Components/pages/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CompletedComponent,
    UsersComponent,
    Page404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
