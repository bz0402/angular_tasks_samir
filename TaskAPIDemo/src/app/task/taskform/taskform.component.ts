import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent  {
  taskForm: FormGroup;
  loading = false;
  error = '';
  tagInput = '';
  tags: string[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      dueDate: ['', [Validators.required, this.futureDateWithin2Years]],
      status: ['active', Validators.required]
    });
  }

  futureDateWithin2Years(control: AbstractControl) {
    const value = control.value;
    if (!value) return null;
    const inputDate = new Date(value);
    const now = new Date();
    const twoYearsLater = new Date(now.getFullYear() + 2, now.getMonth(), now.getDate());
    if (inputDate <= now) return { notFuture: true };
    if (inputDate > twoYearsLater) return { tooFar: true };
    return null;
  }

  addTag(): void {
    let tag = this.tagInput.trim();
    if (!tag.startsWith('#')) tag = '#' + tag;
    if (
      tag &&
      !this.tags.includes(tag) &&
      /^#[a-zA-Z0-9]+$/.test(tag)
    ) {
      this.tags.push(tag);
    }
    this.tagInput = '';
  }

  removeTag(tag: string): void {
    this.tags = this.tags.filter(t => t !== tag);
  }

  onSubmit(): void {
    if (this.taskForm.valid && this.tags.length > 0) {
      this.loading = true;
      this.error = '';
      const taskData = {
        ...this.taskForm.value,
        tags: this.tags
      };
      this.taskService.createTask(taskData).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          this.loading = false;
          this.error = err.error?.message || 'Failed to create task';
        }
      });
    } else if (this.tags.length === 0) {
      this.error = 'At least one valid tag is required.';
    }
  }
}

