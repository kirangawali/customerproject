import { Component, OnInit } from '@angular/core';

import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl1 : string = '';

  constructor(private routr : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl1 = this.route.snapshot.queryParams[this.returnUrl1] || '/home' ;
  } 
  
  lg(){
    this.routr.navigate([this.returnUrl1]) ; 
  }

}
