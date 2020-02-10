import { Component, OnInit } from '@angular/core';
import { SignIn } from '../sign-in';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupModelForm = new SignIn('','','','','','','');

  userType : any = ['Admin','Student','Trainer'];

  constructor(private authService : AuthService) { }

  signInData(){
    console.log("start " +this.signupModelForm.userName );
    this.authService.addUserData(this.signupModelForm).subscribe( (response) => {
      console.log(' User  Added:: '+ response);
      //this.routr.navigate(['/login']);
    });

    console.log("end " +this.signupModelForm.userName );
  }

  /*sign(){
    this.authService.signIn(this.signUpModelForm);
  }*/

  ngOnInit() {
  }

}
