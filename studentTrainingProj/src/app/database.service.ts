import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  getMessage(){
    return this.http.get('http://localhost:3000');
  }

  getEmployee(){
   return this.http.get('http://localhost:3000/employee');
  }

  getProduct(){
    return this.http.get('http://localhost:3000/product');
  }

  constructor(private http : HttpClient) { }
  

}

/* here we have created this service and isko modules kr providers me register kiya yaha injectable ko import kiya 
or http client ko import kiya ,htttpclient me se http object liya http chahiye methods use krne k liye */