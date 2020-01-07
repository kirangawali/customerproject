import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MydataComponent } from './mydata/mydata.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

import { MatrialModule } from './material/matrial.module';
import { AddnoteComponent } from './addnote/addnote.component';
import { GetNoteComponent } from './get-note/get-note.component';

@NgModule({
  declarations: [
    AppComponent,
    MydataComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    AddnoteComponent,
    GetNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatrialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
