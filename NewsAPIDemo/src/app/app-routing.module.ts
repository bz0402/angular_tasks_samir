import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './Components/news/news.component';
import { HomeComponent } from './Components/home/home.component';
import { Error401PageComponent } from './Components/error401-page/error401-page.component';
import { Error404PageComponent } from './Components/error404-page/error404-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'News', component: NewsComponent},
  { path: 'error401Page', component: Error401PageComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: Error404PageComponent }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
