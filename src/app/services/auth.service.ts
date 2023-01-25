import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  // signupForm: any;

  constructor(private router:Router , private http: HttpClient) { }

  settoken(token:string) {
    localStorage.setItem('token',token);
    // return token;
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }


  isLoggedIn(){
    return this.getToken() != null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password}:any): Observable <any>{
    console.log(email, password);
  return this.http.get<any>("http://localhost:3000/signup");
  }

}
