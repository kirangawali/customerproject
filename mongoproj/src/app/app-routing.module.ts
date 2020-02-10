
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { JvcustomerComponent } from './jvcustomer/jvcustomer.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MydataComponent } from './mydata/mydata.component';
import { AddnoteComponent } from './addnote/addnote.component';


const routes: Routes = [

  { path : '', redirectTo :'/home' , pathMatch: 'full' },
  { path : 'home', component : HomeComponent },

  { path : 'login', component : LoginComponent },
  { path : 'signUp', component : SignupComponent },
  {path : 'books' , component : BooksComponent},
  {path : 'jvcustomer' , component :JvcustomerComponent},
  {path: 'showcustomer', component : ShowcustomerComponent},
  {path : 'feedback' , component: FeedbackComponent},
  {path : 'myData' , component : MydataComponent},
  {path : 'addNote' , component : AddnoteComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
