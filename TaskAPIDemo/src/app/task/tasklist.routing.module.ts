import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskformComponent } from './taskform/taskform.component';


const routes: Routes = [
      { path: '', component: TaskListComponent },
      { path: 'new', component: TaskformComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
