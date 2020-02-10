import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes';
import { AuthService } from '../auth.service';
import { Notesss } from '../notesss';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  notesModelForm = new Notes('','');
  notesDataa : Notesss[] = [];


  constructor(private authService : AuthService) { }

  notesData(){
    console.log("note added" + this.notesModelForm.userName);
    this.authService.addNotesData(this.notesModelForm).subscribe((response) => {
      console.log("notes " + response);
    });
    console.log("notes info " + this.notesModelForm.userName);
  }

  ngOnInit() {
  }

}



