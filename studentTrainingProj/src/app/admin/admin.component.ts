import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { AdminData } from '../admin-data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message:string='hello';

  checkMessage(){
  //  this.message='good Afternoon';

  this.message = this.adminService.getAnotherMessage()
  }
  
  responseData:any=[
    new AdminData ('../../assets/imag/fridge.jpg','vaishali','chennai'),
    new AdminData ('../../assets/imag/tv.jpg','tohshiba','mumbai'),
  ];

  getNewData(){
    this.responseData= this.adminService.getNewAdmin()
  }

  constructor(private adminService : AdminServiceService) { }

  ngOnInit() {
    this.message=this.adminService.getMessage();
  }

}
