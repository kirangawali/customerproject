import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MydataComponent } from './mydata/mydata.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import { JvcustomerComponent } from './jvcustomer/jvcustomer.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { MatrialModule } from './material/matrial.module';
import { AddnoteComponent } from './addnote/addnote.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    MydataComponent,
    HomeComponent,
    BooksComponent,
    JvcustomerComponent,
    ShowcustomerComponent,
    FeedbackComponent,
    AddnoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatrialModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
