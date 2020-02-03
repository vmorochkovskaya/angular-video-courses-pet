import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from './login-page.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [LoginPageComponent],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginPageModule { }
