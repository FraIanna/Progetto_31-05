import { Component, Input } from '@angular/core';
import { iUser } from '../../../Models/user';
import { UserService } from '../../../Services/userService/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss',
})
export class SingleUserComponent {
  @Input() user!: iUser;
  userWithTodo: iUser[] = [];
  constructor(private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc.getUsersWithTodo();
  }
}
