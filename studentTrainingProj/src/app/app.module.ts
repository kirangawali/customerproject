import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { GmailComponent } from './gmail/gmail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { AdminComponent } from './admin/admin.component';
import { AdminServiceService } from './admin-service.service';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { DatabaseService } from './database.service';
import { ServerdataComponent } from './serverdata/serverdata.component';

import { HhvalidateDirective } from './hhvalidate.directive';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    GmailComponent,
    AdminComponent,
    AdminChildComponent,
    ServerdataComponent,
    
    HhvalidateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [AdminServiceService , DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
