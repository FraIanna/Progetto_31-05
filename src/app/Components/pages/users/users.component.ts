import { Component } from '@angular/core';
import { UserService } from '../../../Services/userService/user.service';
import { iUser } from '../../../Models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  userArr: iUser[] = [];

  constructor(private userSVC: UserService) {}

  ngOnInit() {
    this.userArr = this.userSVC.users;
  }
}
