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
  todoWithUser: iTodo[] = [];
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.todoArr = this.todoSvc.todos;
    this.userSvc.getTodoWithUser();
  }
}
