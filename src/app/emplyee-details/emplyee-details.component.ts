import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../service/employee.service'; 

@Component({
  selector: 'app-emplyee-details',
  templateUrl: './emplyee-details.component.html',
  styleUrls: ['./emplyee-details.component.css']
})
export class EmplyeeDetailsComponent implements OnInit {
id: number=0;
  employ: Employ = new Employ;

  constructor(private route: ActivatedRoute, private employService: EmployeeService) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.employ = new Employ();
  this.employService.getEmployById(this.id).subscribe(data =>{
    this.employ = data;
  });
  }

}