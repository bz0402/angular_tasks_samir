import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;
  error = '';
  // selectedStatus = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.loading = true;
    this.error = '';
    // this.taskService.getTasks(this.currentPage, this.selectedStatus).subscribe({
    //   next: (response) => {
    //     this.tasks = response.data.tasks;
    //     this.totalPages = response.data.totalPages;
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     this.error = 'Failed to load tasks. Please try again.';
    //     this.loading = false;
    //   }
    // });
  }

  onStatusChange(event: Event) {
    // const select = event.target as HTMLSelectElement;
    // this.selectedStatus = select.value;
    // this.currentPage = 1;
    // this.loadTasks();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadTasks();
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
}
