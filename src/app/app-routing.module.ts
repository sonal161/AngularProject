
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DisplayComponent } from './display/display.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmplyeeDetailsComponent } from './emplyee-details/emplyee-details.component'; 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'create-employee',component: CreateEmployeeComponent},
  {path: 'display', component: DisplayComponent,
  children:[
    {path:'create-employee',component: CreateEmployeeComponent},
    {path:'employee-list',component: EmployeeListComponent},
    {path: 'update-employee/:id',component: UpdateEmployeeComponent},
    {path: 'emplyee-details/:id',component: EmplyeeDetailsComponent},
    {path: 'employs',component: EmployeeListComponent}
  ]},
  
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
