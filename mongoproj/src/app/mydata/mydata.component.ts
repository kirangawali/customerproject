import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignInData } from '../sign-in-data';


@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {

  user : SignInData;

  updateUserEntry(){

     this.authService.updateUser(this.user).subscribe(response => {


    });
  } 
  
  

  constructor( private authService : AuthService) { }

  ngOnInit() {
    this.user = this.authService.getLoggedInUser();
  }

}
