import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
     LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,  
    AuthRoutingModule
  ]
})
export class AuthModule { }
