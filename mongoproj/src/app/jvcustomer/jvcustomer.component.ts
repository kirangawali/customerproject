import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { AuthService } from '../auth.service';
import {CustomerData} from '../customer-data';


@Component({
  selector: 'app-jvcustomer',
  templateUrl: './jvcustomer.component.html',
  styleUrls: ['./jvcustomer.component.css']
})
export class JvcustomerComponent implements OnInit {
  
  customerData : Customer[] = [];

  customerForm = new CustomerData('','','','','');

  constructor(private authService : AuthService) { }

 /* 
  deleteEntry(id : any){
    console.log('id= '+id);
    console.log("booking confirm" + this.customerForm.customerName);
    this.authService.deleteCusData(id).subscribe();
   console.log('ended' +this.customerForm.customerName); 
  }  */

  deleteEntry(user : CustomerData){
    console.log('id= '+user.customerId);
    console.log("booking confirm" + this.customerForm.customerName);
    this.authService.deleteCusData(user).subscribe();
   console.log('ended' +this.customerForm.customerName); 
  } 

  updateCustomerEntry(){
    console.log("booking confirm" + this.customerForm.customerName);
    this.authService.updatCustomerData(this.customerForm).subscribe((msg : Customer[]) =>{
      console.log('book published : ' +msg);
    });
    console.log('ended' +this.customerForm.customerName);
  } 
  

  ngOnInit() {

    this.authService.getCustomerData().subscribe(
      (response : Customer[] ) => {
        this.customerData = response;
        for(var i = 0 ; i<this.customerData.length ; i++){
          console.log('userName = '+ this.customerData[i].customerName);
        }
      }
    ); 
  }

}
