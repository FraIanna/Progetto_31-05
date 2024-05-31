import { Component } from '@angular/core';
import { TodoService } from '../../../Services/todoService/todo.service';
import { iTodo } from '../../../Models/todo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private todoSvc: TodoService) {}
  allTodo: iTodo[] = [];
  ngOnInit() {
    this.allTodo = this.todoSvc.todos;
    this.allTodo.forEach((todo) => {
      this.todoSvc.searchFor(todo.todo);
    });
  }
}
