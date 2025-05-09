import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskformComponent } from './taskform/taskform.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: TaskListComponent },
      { path: 'new', component: TaskformComponent }
    ])
  ]
})
export class TaskModule { }