import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from './todo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private _todoService: TodoService, private _title: Title) {}

  ngOnInit(): void {
    this.getTodos();
    this._title.setTitle('Todo Application');
  }

  getTodos(): void {
    this._todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: String(this.todos.length + 1),
        title: this.newTodoTitle,
        completed: false,
      };
      this._todoService.addTodo(newTodo).subscribe((todo) => {
        this.todos.push(todo);
        this.newTodoTitle = ''; // Clear the input field
      });
    }
  }

  updateTodo(todo: Todo): void {
    todo.completed = !todo.completed;
    this._todoService.updateTodo(todo);
  }

  deleteTodo(id: string): void {
    this._todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }
}
