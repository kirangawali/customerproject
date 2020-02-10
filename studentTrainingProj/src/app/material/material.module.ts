import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule , MatNativeDateModule} from '@angular/material';




const material=[
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
MatDatepickerModule,
MatNativeDateModule

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    
    material
  ]
})
export class MaterialModule {
  
 }