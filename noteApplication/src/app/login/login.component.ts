import { Component, OnInit } from '@angular/core';
import {LogIn} from '../log-in';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl : String = '';
  loginModelForm = new LogIn('','');

  constructor(private routr : Router,
    private route: ActivatedRoute , private authService : AuthService) { }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  

login()
{
/*  this.authService.loginData(this.loginModelForm).subscribe(data =>{
    console.log('data fetched' + data);
    
  })*/
  console.log('before login..');
  console.log('after a login..' + this.loginModelForm.userName);
  console.log('after a login..' + this.loginModelForm.password);
  this.authService.loginData(this.loginModelForm);
  //this.routr.navigate([this.returnUrl]);
}


}
