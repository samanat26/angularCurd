import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  signup: Signup;
  signupFields: Array<FormlyFieldConfig>;
  // toast: any;
  signuser:any;
  // pas: string='none';
  // route: any;

constructor(private route:Router, private _http: HttpClient){
  this.signupForm= new FormGroup({});
  this.signup= new Signup();
  this.signupFields= this.signup.formFields();
}
onSubmit(signup : Signup){
  if(this.signup.password == this.signup.cpassword){
  alert('Matched Password')
  // console.log(signup)
  this.signuser=this.signup.name
  this._http.post<any>("http://localhost:3000/signup", this.signup)
  
  .subscribe(res=>{alert (`${this.signuser} ,You are Signed Up `);
    this.signupForm.reset (); 
    this.route.navigate(['login']);
  }, err=>{
    alert('Something went wrong');
  }
  )                                                         
}
else{
  console.log(this.signup.password , this.signup.cpassword)
  alert ('Enter the Confirm your Password ')
}
}
}
