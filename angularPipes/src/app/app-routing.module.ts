import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassGeneratorComponent } from './Components/pass-generator/pass-generator.component';

const routes: Routes = [
  {path:'', component:PassGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
