import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignInData } from '../sign-in-data';
import { Customer } from '../customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService) { }
  
  userData : SignInData[] = []; 
  //customerData : Customer[] = [];
  ngOnInit() {
    this.authService.getHomePageData().subscribe(
      (response : SignInData[] ) => {
        this.userData = response;
        for(var i = 0 ; i<this.userData.length ; i++){
          console.log('userName = '+ this.userData[i].userName);
        }
      }
    ); 

    /* 
    //that is to join java data to ui
    this.authService.getHomePageData().subscribe(
      (response : Customer[] ) => {
        this.customerData = response;
        for(var i = 0 ; i<this.customerData.length ; i++){
          console.log('userName = '+ this.customerData[i].customerName);
        }
      }
    );  */

  }

}
