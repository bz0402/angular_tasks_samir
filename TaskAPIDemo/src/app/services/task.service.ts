import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  title: string;
  description: string;
  status: string;
  dueDate: string;
  tags: string[];
}

export interface TaskResponse {
  success: boolean;
  data: {
    tasks: Task[];
    totalTasks: number;
    currentPage: number;
    totalPages: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'https://taskflowapi.vercel.app/api';

  constructor(private http: HttpClient) {}

  createTask(taskData: Task): Observable<any> {
    return this.http.post(`${this.baseUrl}/tasks`, taskData);
  }

  getTasks(page: number = 1, status?: string): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString());
    
    if (status) {
      params = params.set('status', status);
    }

    return this.http.get(`${this.baseUrl}/tasks`, { params });
  }
}