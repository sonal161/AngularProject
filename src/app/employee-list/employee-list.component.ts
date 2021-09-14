// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css']
// })
// export class EmployeeListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {Employ} from '../employ';
import { EmployeeService } from '../service/employee.service'; 
import { Router} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  //template: ` <h1> sjdhjdsdjsdk</h1>`
  templateUrl: './employee-list.component.html',
  //styles: [],
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employs: Employ[]=[];

  constructor(private employService: EmployeeService, private router: Router)
   { }

   getEmployees(){
     this.employService.getEmploysList().subscribe(data =>{
     this.employs = data;
     console.log(this.employs);
     });
   }

  ngOnInit(): void {
    this.getEmployees();
  }

  employeeDetails(id: number){
    this.router.navigate(['/display/emplyee-details/', id]);
  }
  updateEmployee(id: number){
    this.router.navigate(['/display/update-employee/', id]);
  }

  deleteEmployee(id: number){
    this.employService.deleteEmploy(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
