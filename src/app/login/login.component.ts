// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit {
//   formGroup!: FormGroup;
//   message: string;
//   sto = false;
//   // public register: Register[] = [];

//   isFormValid = true;

// constructor(private router: Router, private activatedRoute: ActivatedRoute) {
//     this.message = '';
//     }
//    ngOnInit() {
//      this.formGroup = new FormGroup({
//        UserName: new FormControl('', [
//          Validators.required,
//          //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)
//        ]),
//        Password: new FormControl('', [
//          Validators.required,
//          //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/),
//          Validators.minLength(8),
//          Validators.maxLength(20),
         
//         ]),
//           // Name: new FormControl('', [
//           //   Validators.required
//           // ]),
//           // MobileNo: new FormControl('', [
//           //   Validators.required
//           // ]),
        
//      });
//    }
//     onSubmit() {
//      console.log(this.formGroup);
//      this.isFormValid = true;
//      if (this.isFormValid) {
//     //  const user = {
//     //    username: this.formGroup.value('Username'), // Username input field
//     //    password: this.formGroup.value('Password') // Password input field
//     //  };
//      console.log('Form valid');
//    //  console.log(user.username + '  ' + user.password );
//      console.log('Formgroup value :' + this.formGroup.value);
//      this.router.navigate(['/display']);
//      }

//     }

//    onReset() {
//      this.formGroup.reset();
//    }

//     // isValid(controlName) {
//     //  return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
//     // }

// moveToRegister() {
//     this.router.navigate(['../add-employee'], { relativeTo: this.activatedRoute});
// }
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formLogIn!: FormGroup;
  message: string;
  sto = false;
  user ='';
  error: string = '';
  // public register: Register[] = [];

  isFormValid = true;

constructor(private router: Router, private activatedRoute: ActivatedRoute, private loginService:LoginService) {
    this.message = '';
    }
   ngOnInit() {
     this.formLogIn = new FormGroup({
       UserName: new FormControl('', [
         Validators.required,
      
        //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)
       ]),
       Password: new FormControl('', [
        Validators.required,
         Validators.minLength(4),
         Validators.maxLength(20)
       ])
     });
   }
    onSubmit() 
    {
      console.log(this.formLogIn);
      this.isFormValid = true;
      this.loginService.matchUserById (this.formLogIn.controls['UserName'].value , this.formLogIn.controls['Password'].value ).subscribe(data =>{
        console.log(data);
if(data != null)
  this.router.navigate(['/display']);
  else
  this.router.navigate(['/wrong-username']);
}, error => console.log('Wrong username or wrong password'));

  
  
// console.log(this.formLogIn);
     
    //  this.isFormValid = true;
    //  if (this.isFormValid) {
    // const user = {
    //    username: this.formLogIn.value('Username'), // Username input field
    //    password: this.formLogIn.value('Password') // Password input field
    // };
   
    //  console.log(user.username + '  ' + user.password );
    //   console.log('Formgroup value :' + this.formLogIn.value);
     // this.router.navigate(['/display']);
     }
   // }


   onReset() {
     this.formLogIn.reset();
   }

  //  isValid(controlName) {
  //   return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
  //  }

moveToRegister() {
    this.router.navigate(['../signup'], { relativeTo: this.activatedRoute});
}
}