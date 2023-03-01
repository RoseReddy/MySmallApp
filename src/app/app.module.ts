import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AppTwoDecimalPlacesDirective } from './app-two-decimal-places.directive';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { Router, RouterModule } from '@angular/router';
import { homedir } from 'os';
const appRoutes:Router=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'categories',component:CategoriesComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AppTwoDecimalPlacesDirective,
    HomeComponent,
    UsersComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
