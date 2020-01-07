
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MydataComponent } from './mydata/mydata.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { GetNoteComponent } from './get-note/get-note.component';


const routes: Routes = [

  { path : '', redirectTo :'/home' , pathMatch: 'full' },
  { path : 'home', component : HomeComponent },

  { path : 'login', component : LoginComponent },
  { path : 'signUp', component : SignupComponent }, 
  {path : 'myData' , component : MydataComponent},
  {path : 'addNote' , component : AddnoteComponent},
  {path : 'getNote' , component : GetNoteComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
