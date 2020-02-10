import { Component, OnInit } from '@angular/core';
import {SigninData} from '../signin-data';

import {Router , ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpModelForm = new Userdata('A','A','A','A','A','A','A');

  userType : any = ['student','trainer','admin','register'];

  returnUrl : string = '';

  constructor( private routr : Router , private route : ActivatedRoute , private authService : AuthService ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  sign(){
    this.authService.signIn(this.signUpModelForm);
  }

  sp () {
   // this.routr.navigate(['\login']);
    this.routr.navigate([this.returnUrl]);
  }
}
