import { iTodo } from '../../../Models/todo';
import { TodoService } from './../../../Services/todoService/todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  todoArr: iTodo[] = [];
  completedTodo: iTodo[] = [];

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.todoArr = this.todoSvc.todos;
    this.completedTodo = this.todoSvc.getByCompleted(this.todoArr);
  }
}
