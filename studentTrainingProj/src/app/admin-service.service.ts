import { Injectable } from '@angular/core';
import { AdminData } from './admin-data';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  getMessage():string{
    let msg = 'good morning';
    return msg;
  }

  getAnotherMessage():string{
    let msg = 'good afternoon';
    return msg;
  }

  getNewAdmin():any{
    let r :any=[];
    r= [
      new AdminData ('../../assets/imag/fridge.jpg','fridge',' haryana')
    ]

    return r;
  }
  

  constructor() { }
}
