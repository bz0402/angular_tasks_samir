import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { TaskformComponent } from './task/taskform/taskform.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path:'', component: TaskformComponent

  },
  {
    path: 'auth' ,loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
