import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SignIn } from './sign-in';
import { LogIn } from './log-in';
import { Booksdata } from './booksdata';
import { Subject } from 'rxjs';
//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
//import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';
//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/delay';
//import 'rxjs/add/operator/map';
import { CustomerData } from './customer-data';
import {Feedbackdata} from './feedbackdata';
import { SignInData } from './sign-in-data';
import { Router } from '@angular/router';
import { Notes } from './notes';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   /*private listCustomers: any[] = [{
    customerId: 1,
    customerName: 'shivani',
    customerAge: 23,
    customerAddress: 'viman nagar',
    customerContactNumber: 123456789
  }
  ]; */

  //this is a token variable
  private token : string;

  //this is for all details of loggedInuser 
  private loggedInUser : SignInData;

  //tokentimer used for auto expiration of Session
  private tokenTimer: any;

  //isAUthenticated - states weather user is authenticated or not
  private isAuthenticated = false;

  //userRole for admin, student, trainer
  private userRole : string;

  //status listener variable in case if session expire after duration it notifies other component like headercomponent
  private authStatusListener = new Subject<boolean>();
  

  constructor(private http1: HttpClient, private httpClient: HttpClient ,private routr : Router) { }
 /*
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('client side error: ', errorResponse.error.message);
    }
    else {
      console.error('server side error: ', errorResponse);
    }
    return new ErrorObservable('there is a problem with the service we are working on it');
  }
*/

  newData() {
    console.log('new data to be tested');
  }

  getHomePageData() {

    console.log(" Authservice getHomePageData()   start");

    let d = new Date();
    let hostUrl = 'http://localhost:3000/api/employee/getUsers?v=' + d.toLocaleTimeString();

    console.log(" AuthService getHomePageData()  end before http call");

    console.log('after http call');

    return this.http1.get(hostUrl);

  }

// customerData Crud operations for java and sql
  getCustomerData() {

    console.log(" Authservice getCustomerData()   start");

    let d = new Date();

    let hostUrl = 'http://localhost:8080/api/getdata?v=' + d.toLocaleTimeString();

    console.log(" AuthService************************** getCustomerData()  end before http call");

    console.log('after http call');

    return this.http1.get(hostUrl);

  }

/*
  addCustomersData(customer: any): Observable<any[]> {
    if (customer.customerName === null) {
      return this.httpClient.post<any>('http://localhost:8080/api/savedata', customer, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
        .pipe(catchError(this.handleError));
    }
    else {
      const foundIndex = this.listCustomers.findIndex(c =>
        c.customerName === customer.customerName);
        this.listCustomers[foundIndex] = customer;
    } */

    addCustomersData( User : CustomerData){
    
    console.log(" AuthService addCustomersData()   start");
    console.log(' User = ' + User.customerName);
    let body: any = User;
    let d = new Date();
    let hostUrl = 'http://localhost:8080/api/savedata?v=' + d.toLocaleTimeString();
    console.log(" AuthService #########addCustomersData()  end before http call");
    console.log('after http call');
    return this.http1.post(hostUrl, body);
  }

  updatCustomerData(User1 : CustomerData){
    console.log(" AuthService updatCustomerData()   start");
    console.log(' User = ' + User1.customerName);
    let body: any = User1;
    let e = User1.customerId;
    let d = new Date(); 
    let hostUrl = 'http://localhost:8080/api/updatedata/' ;
    let str1 = hostUrl;
    let str2 = str1 +  User1.customerId; 
    console.log(" AuthService #$$$$$$$$updatCustomerData()  end before http call");
    console.log('after http call');
    return this.http1.put(str2, body);
  }

/*  deleteCusData(User3 : CustomerData){
    console.log(" AuthService deleteCustomerData()   start");
    console.log('uservalue : ' + User3.customerAge);  
    let body: any = User3;
    let e = User3.customerId;
    let d = new Date(); 
    let hostUrl = 'http://localhost:8080/api/deletedata/' ;
    let str1 = hostUrl;
    let str2 = str1 + User3.customerId; 
    console.log(" AuthService #$$$$$$$$deleteCustomerData()  end before http call" );
    console.log('after http call'+ str2);
    return this.http1.delete(str2, body);
  } */
/*
  deleteCusData(id : any){
    console.log("show : " + id);
    let hostUrl = 'http://localhost:8080/api/deletedata/' ;
    let str1 = hostUrl;
    let str2 = str1 + id;
    console.log('your url = '+str2); 
    return this.http1.delete(str2);
  } */

  deleteCusData(userData : CustomerData){
    console.log("showauthservice : " + userData.customerId);
    let hostUrl = 'http://localhost:8080/api/deletedata/' ;
    let str1 = hostUrl;
    let str2 = str1 + userData.customerId;
    console.log('your url******** = '+str2); 
    return this.http1.delete(str2);
  }
  

  addUserData(User: SignIn) {
    console.log(" AuthService addUserData()   start");

    console.log(' User = ' + User.email);
    let body: any = User;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/api/employee/signup?v=' + d.toLocaleTimeString();
    //let hostUrl = 'http://localhost:3500/vaishali';
    console.log(" AuthService addUserData()  end before http call");

    console.log('after http call');

    return this.http1.post(hostUrl, body);
  }


  addBookData(User: Booksdata) {
    console.log(" AuthService addBookData()   start");

    console.log(' User = ' + User.author);
    let body: any = User;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/api/employee/books?v=' + d.toLocaleTimeString();

    console.log(" AuthService addBookData()  end before http call");

    console.log('after http call');

    return this.http1.post(hostUrl, body);
  }

  /*
  loginData(loginUser: LogIn) {
    console.log('login method is called ');

    let body: any = loginUser;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/api/employee/login?v=' + d.toLocaleTimeString();
    //let hostUrl = 'http://localhost:3500/vaishali';
    console.log(" AuthService loginData()  end before http call");

    console.log('after http call');

    return this.http1.post(hostUrl, body);
  }
 */


  
  /* This function sets timeout and logout function is executed after duration..*/
  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }


  /* This function saves data into local storage */
  private saveAuthData(token: string, expirationDate: Date, userRole: string, loggedInUser :SignInData) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userRole", userRole);
    localStorage.setItem("loggedInUser",  JSON.stringify(loggedInUser));   

  }

  
  /*This is a log out functionality */
  logout() {
    /* All saved values first we make null */
    this.token = null;
    this.loggedInUser = null;
    this.userRole =null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);

    /*This function clears all stored data inside local storage */
    localStorage.clear();

     /*This is a logic to navigate to Login Page.. we can add any component */
    this.routr.navigate(['/login']);
}


  /*This function clears all local storage data */
  private clearAuthData() {
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userRole");
  }


  /* This function gives us authentication data */
  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    }
  }


  /*This function automatically gets executed and logs out user after duration */
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }



  getUserRole()
  {
      //console.log(" Inside getUserRole ... ");
      if(localStorage.getItem("token") != null)
      {
        //console.log(" Inside getUserRole ... token not null");
        this.userRole = localStorage.getItem("userRole") ;
      }
      //console.log(" Inside getUserRole ... token not null = "+this.userRole);
      return this.userRole;
  }

  getLoggedInUser()
  {

    if(localStorage.getItem("token") != null)
    {
    //console.log(" Inside getIsAuth ...token not null.. ");
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); 
    }
    //console.log(' current user : '+this.loggedInUser);
    return this.loggedInUser;
  }

    getIsAuth() {
    //console.log(" Inside getIsAuth ... ");
    //console.log(' this.token ... '+localStorage.getItem("token"));

    if(localStorage.getItem("token") != null)
    {
      //console.log(" Inside getIsAuth ...token not null.. ");
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
    }


  getAuthStatusListener()
  {
    return this.authStatusListener.asObservable();

  }

  getToken()
  {
    console.log(' this.token ... '+localStorage.getItem("token"));
    return localStorage.getItem("token");
  }

   /*This function is used for log in current user */
   loginData( user : LogIn )
   {  
     //console.log('AuthServiceAuthService User = '+ user.userName); 
     //console.log('AuthService password = '+ user.password); 
     let body:any =  user; 
     let d = new Date(); 
     let hostUrl = 'http://localhost:3000/api/employee/loginNew?v='+d.toLocaleTimeString();
     //console.log(" hostUrl ::  "+hostUrl);
 
     this.http1.post<{token : string, user : SignInData, expiresIn: number}>(hostUrl, body).subscribe(response =>
     {
       /*This is a logic to set token , loggedIn User , userRole */
       console.log('Response.. '+response.token);
       const token = response.token;
       this.token = token;
       this.loggedInUser = response.user;
       console.log('logedinuser = '+ this.loggedInUser);

       this.userRole = this.loggedInUser.userType;
       //console.log('this.token.. '+this.token);
        
       /* This is a logic to set expiration time */
       const expiresInDuration = response.expiresIn;
       this.setAuthTimer(expiresInDuration);
       
       /* This is a logic to calculate when token is going to expire */
       const now = new Date();
       const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
       //console.log(expirationDate);

       /*This is a logic to save token , expiration date , user Role, logged In User inside local storage */
       this.saveAuthData(token, expirationDate, this.userRole, this.loggedInUser);

       /*This is a logic to indicate other authentication listener with real time date */
       this.authStatusListener.next(true);

       /*This is a logic to navigate to Home Page.. we can add any component */
       this.routr.navigate(['/myData']);
      

     });

 }

 
/* this function is to update data of current user*/
  updateUser( user : SignIn){

        let body:any =  user; 
        let d = new Date(); 
        let hostUrl = 'http://localhost:3000/api/employee/update?v='+d.toLocaleTimeString();

        
    console.log(" AuthService************************** updateuserData()  end before http call");

    console.log('after http call');

        return this.http1.put(hostUrl, body);

  }


  
  addNotesData(User: Notes) {
    console.log(" AuthService addNotesData()   start");

    console.log(' User = ' + User.userName);
    let body: any = User;
    let d = new Date();
    let hostUrl = 'http://localhost:3000/api/employee/notes?v=' + d.toLocaleTimeString();

    console.log(" AuthService addNotesData()  end before http call");

    console.log('after http call');

    return this.http1.post(hostUrl, body);
  }

}
