import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { Product } from '../product';

@Component({
  selector: 'app-serverdata',
  templateUrl: './serverdata.component.html',
  styleUrls: ['./serverdata.component.css']
})
export class ServerdataComponent implements OnInit {

  message :any='Welcome';

  emp:Employee [] = [];

  product : Product [] =[];

  getEmp(){
    this.dservice.getEmployee().subscribe(
      (response : Employee[]) =>
      {
      this.emp= response;
      }
    );

    for(var i=0 ; i<this.emp.length; i++ ){
      console.log("data" + this.emp[i].name + '\n'+this.emp[i].Age );
      
    }
  }

  getProd(){
    this.dservice.getProduct().subscribe(
      (response : Product[]) =>
      {
        this.product = response;
      }
    );
    for(var i =0 ; i<this.product.length ; i++){
      console.log("data" + this.product[i].name + '\n' + this.product[i].age + '\n'+ this.product[i].fees);
    }
  }
  

  
  constructor( private dservice : DatabaseService , private http : HttpClient) { }
  
 
  ngOnInit() {
    this.dservice.getMessage().subscribe((response) => 
    
    {
      this.message=response
      
    });
  }

}

/* 
yaha pr bhi constructor me dependency di , observable ko use krne k liye subscribr method ka use kiya 
http ki dependency dobara di */