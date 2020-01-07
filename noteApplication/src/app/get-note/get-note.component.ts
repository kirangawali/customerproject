import { Component, OnInit, Input } from '@angular/core';
import { Notesss } from '../notesss';
import { AuthService } from '../auth.service';
import { Notes } from '../notes';
import { SignInData } from '../sign-in-data';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.css']
})
export class GetNoteComponent implements OnInit {
  notesDataa : Notesss[] = [];

  updateModelForm = new Notes('','','');
  notesModelForm = new Notes('','','');
  @Input() user: SignInData;

  constructor(private authService : AuthService) { }

  deleteNoteEntry(user : Notes){
    console.log('id= '+user._id);
    console.log("booking confirm" + this.notesModelForm.userName);
    this.authService.deleteNoteData(user).subscribe();
   console.log('ended' +this.notesModelForm.userName); 
  } 

  updateNoteEntry(data : Notes){
    console.log("booking confirm" + data.userName+" id = " + data._id);
    this.authService.updateNoteData(data).subscribe((msg : Notesss[]) =>{
      console.log('book published : ' +msg);
    });
    console.log('ended' +data.userName);
  } 

  updateData(data : Notes){
        this.updateModelForm = data;
  }

  ngOnInit() {
    
    this.user =  this.authService.getLoggedInUser();
    console.log("username*******&&&&&&&&&&&&&" +this.user.userName);

    
    this.authService.getNotePageData().subscribe(
      (response : Notesss[] ) => {
        this.notesDataa = response;
        for(var i = 0 ; i<this.notesDataa.length ; i++){
          console.log('userName = '+ this.notesDataa[i].userName);
        }
      }
    ); 
  }

}
