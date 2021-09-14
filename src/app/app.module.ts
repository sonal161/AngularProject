import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component'; 
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DisplayComponent } from './display/display.component';
import { EmplyeeDetailsComponent } from './emplyee-details/emplyee-details.component'; 
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthgardserviceService } from './service/authgardservice.service';
import { LoginService } from './service/login.service';
import { WrongUsernameComponent } from './wrong-username/wrong-username.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    DisplayComponent,
    EmplyeeDetailsComponent,
    CreateEmployeeComponent,
    WrongUsernameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [EmployeeService, AuthgardserviceService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }



