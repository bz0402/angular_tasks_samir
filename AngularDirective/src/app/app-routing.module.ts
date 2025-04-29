import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CardComponent } from './Component/cards/cards.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Card', component: CardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
