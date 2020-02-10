import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninData } from './signin-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http : HttpClient) { }

  signIn(user : SigninData){

    let body:any =  user; 
    let d = new Date();
    let hostUrl = 'http://localhost:3500/api/employee/signup/?v='+d.toLocaleTimeString();
    return this.http.post(hostUrl, body);


    console.log('user  = '+ user.email);
  }
}
