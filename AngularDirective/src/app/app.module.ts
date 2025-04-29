import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeDirective } from './Directives/custome.directive';
import { HomeComponent } from './Component/home/home.component';
import { CardComponent } from './Component/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomeDirective,
    HomeComponent,
    CardComponent,
    // Add other components here
    // For example:
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
