import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Booksdata} from '../booksdata';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookModelForm = new Booksdata('','','');
  userCategory : any = ['historical' ,'scientific', 'phsycological','comics' ];

  constructor(private authService : AuthService) { }

  booking(){
    console.log("booking confirm" + this.bookModelForm.author);
    this.authService.addBookData(this.bookModelForm).subscribe((response) =>{
      console.log('book published : ' +response);
    });
    console.log('ended' +this.bookModelForm.author);
  }

  
  ngOnInit() {
  }

}
