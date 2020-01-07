import { Component, OnInit, Input } from '@angular/core';
import { Notes } from '../notes';
import { AuthService } from '../auth.service';
import { SignInData } from '../sign-in-data';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  notesModelForm = new Notes('','','');
  

    @Input() user: SignInData;

  constructor(private authService : AuthService , private routr : Router) { }

  notesData(){
    console.log("note added" + this.notesModelForm.userName);
    this.authService.addNotesData(this.notesModelForm).subscribe((response) => {
      console.log("notes " + response);
  
    });
    console.log("notes info " + this.notesModelForm.userName);
    this.routr.navigate(['/getNote']);
  }

  ngOnInit() {
      this.user =  this.authService.getLoggedInUser();
      console.log("username********************" +this.user.userName);

  }

}



