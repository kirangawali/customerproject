import { Component, OnInit } from '@angular/core';
import { CustomerData } from '../customer-data';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {

  customerModelForm = new CustomerData('','','','','');

  constructor(private authService : AuthService , private router1 : Router) { }
/*
  saveCustomer():void{
    const newCustomer : any = Object.assign({} , this.customer);
    this.authService.addCustomersData(newCustomer).subscribe(
      (data : any) =>{
        console.log(data);
      }
    ); 
    
  }*/
 

  /*
  deleteEntry(){
    console.log("booking confirm" + this.customerModelForm.customerName);
    this.authService.deleteCusData(this.customerModelForm).subscribe();
   console.log('ended' +this.customerModelForm.customerName); 
  } 

  updateCustomerEntry(){
    console.log("booking confirm" + this.customerModelForm.customerName);
    this.authService.updatCustomerData(this.customerModelForm).subscribe((msg : Customer[]) =>{
      console.log('book published : ' +msg);
      this.router1.navigate(['/jvcustomer']);
    });
    
    console.log('ended' +this.customerModelForm.customerName);
    this.router1.navigate(['/jvcustomer']);
   
  } */


  customerEntry(){
    console.log("booking confirm" + this.customerModelForm.customerName);
    this.authService.addCustomersData(this.customerModelForm).subscribe((msg : Customer[]) =>{
      console.log('book published : ' +msg);
      this.router1.navigate(['/jvcustomer']);
    });
    
    console.log('ended' +this.customerModelForm.customerName);
   
  } 

  ngOnInit() {
  }

}
