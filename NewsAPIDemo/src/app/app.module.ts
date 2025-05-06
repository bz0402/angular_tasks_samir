import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NewsComponent } from './Components/news/news.component';
import { HomeComponent } from './Components/home/home.component';
import { NewsCardComponent } from './Components/news-card/news-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './Components/demo/demo.component';
import { Error401PageComponent } from './Components/error401-page/error401-page.component';
import {  AuthInterceptor } from './services/authentication-interceptor.service';
import { Error404PageComponent } from './Components/error404-page/error404-page.component';
import { NewsService } from './services/News.Service';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    HomeComponent,
    NewsCardComponent,
    DemoComponent,
    Error401PageComponent,
    Error404PageComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true
  },
  NewsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
