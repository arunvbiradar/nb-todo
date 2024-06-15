import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../env.js';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(api.url);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(api.url, todo);
  }

  updateTodo(todo: Todo) {
    console.log(`apiUrl: ${api.url}, todo.id: ${todo.id}`);
    return this.http.put(`${api.url}/${todo.id}`, todo).subscribe((data) => {
      console.log(data);
    });
  }

  deleteTodo(id: string) {
    return this.http.delete(`${api.url}/${id}`);
  }
}
