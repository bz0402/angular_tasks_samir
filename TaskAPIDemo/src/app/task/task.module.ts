import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskformComponent } from './taskform/taskform.component';



@NgModule({
  declarations: [
    TasklistComponent,
    TaskformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
