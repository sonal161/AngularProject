import { Employ } from '../employ';

import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  formGroup!: FormGroup;
  message: string;
  sto = false;
  employ: Employ = new Employ();

  //constructor(private employService: EmployService, private router: Router) { }
  
  isFormValid = true;

constructor(private employService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.message = '';
    }

  // ngOnInit(): void {
  // }
  ngOnInit() {
    // this.formGroup = new FormGroup({
    //   Emailid: new FormControl('', [
    //     Validators.required,
    //     //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)
    //   ])
       
    // });
  }
  saveEmploy(){
    this.employService.createEmploy(this.employ).subscribe(data =>{
      console.log(data);
      this.goToEmployList();
    }, error => console.log(error));
  }

  goToEmployList(){
    this.router.navigate(['/display/employee-list']);
  }

  onSubmit(){
    console.log(this.employ);
    this.saveEmploy();
  }
}