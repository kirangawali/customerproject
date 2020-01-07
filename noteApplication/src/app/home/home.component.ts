import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignInData } from '../sign-in-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService) { }
  
  userData : SignInData[] = []; 
  
  ngOnInit() {
    this.authService.getHomePageData().subscribe(
      (response : SignInData[] ) => {
        this.userData = response;
        for(var i = 0 ; i<this.userData.length ; i++){
          console.log('userName = '+ this.userData[i].userName);
        }
      }
    ); 


  }

}
