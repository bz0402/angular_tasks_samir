import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './Components/news/news.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'News', component: NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
