import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './customPipes/custom.pipe';
import { PassGeneratorComponent } from './Components/pass-generator/pass-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CustomPipe,
    PassGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
