import { NgModule } from '@angular/core';
import { HomepageComponent } from './features/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './features/child/child.component';

const routes: Routes = [
  {
  path:'', component: HomepageComponent
  },
  {
    path:'child', component: ChildComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
