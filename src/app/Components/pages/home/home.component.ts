import { Component } from '@angular/core';
import { TodoService } from '../../../Services/todoService/todo.service';
import { iTodo } from '../../../Models/todo';
import { UserService } from '../../../Services/userService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todoArr: iTodo[] = [];

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.todoArr = this.todoSvc.todos;
  }
}
