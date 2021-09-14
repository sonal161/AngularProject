import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroupSignup!: FormGroup;
  submitted = false;
  message: string;
  sto = false;
  user: User = new User();
  
   //user='';
  //constructor(private employService: EmployService, private router: Router) { }
  
  isFormValid = true;

constructor( private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder) {
    this.message = '';
    }

  // ngOnInit(): void {
  // }
  
  ngOnInit() {
    this.formGroupSignup = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
      acceptTerms: [false, Validators.requiredTrue]
  });
  



  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/login']);
  }
  
  get f() { return this.formGroupSignup.controls; }

  onSubmit(){
    
    
    
     console.log(this.formGroupSignup);
     this.isFormValid=true;
     
     this.router.navigate(['/login']);
    
     //this.router.navigate(['/signup']);
    console.log(this.user);
    this.saveUser();

    this.submitted = true;
     if (this.formGroupSignup.invalid) {
      return;
     }

  }

}