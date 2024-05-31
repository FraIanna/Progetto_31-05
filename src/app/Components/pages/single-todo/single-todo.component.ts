import { Component, Input, ViewEncapsulation } from '@angular/core';
import { iTodo } from '../../../Models/todo';
import { UserService } from '../../../Services/userService/user.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss',
})
export class SingleTodoComponent {
  @Input() todo!: iTodo;
  todoWithUser: iTodo[] = [];
  constructor(private userSvc: UserService) {}
  ngOnInit() {
    this.userSvc.getTodoWithUser();
  }
}
