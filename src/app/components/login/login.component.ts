import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  loginForm: FormGroup;
  loginModel: Login;
  loginFields: Array<FormlyFieldConfig>;

constructor(private route:Router, private auth: AuthService){
  this.loginForm= new FormGroup({});
  this.loginModel= new Login();
  this.loginFields= this.loginModel.formFields();
}
  ngOnInit(): void {
    if (this.auth.isLoggedIn()){
      this.route.navigate(['admin'])
    }
  }
onSubmit(login: Login){
  // console.log(login)
if (this.loginForm.valid){
  console.log(this.loginModel);
  
  this.auth.login(this.loginModel).subscribe(res=>{
    console.log(res);
    let data : Array<any> = res;
    let valid = data
    .some
    (user=> user.email == this.loginModel.email && user.password == this.loginModel.password);
    console.log(valid);
    // this.settoken('abcdefghijklmnopqrstuvwxyz');
    localStorage.setItem('token','abcdefghijklmnopqrstuvwxyz');
    
    if(valid){
      this.route.navigate(['admin']);
    }
    
    
  })
}
}}


