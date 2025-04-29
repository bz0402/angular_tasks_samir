import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeDirective } from './Directives/custome.directive';
import { HomeComponent } from './Component/home/home.component';
import { CardComponent } from './Component/cards/cards.component';
import { LastColorDirective } from './Directives/last-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomeDirective,
    HomeComponent,
    CardComponent,
    LastColorDirective,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
