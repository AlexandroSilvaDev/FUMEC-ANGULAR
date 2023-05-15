import { Component } from '@angular/core';

import { Users } from '../interfaces/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent {

  public usersList: Array<Users> = [];

  constructor(private userService: UserService) {
    this.usersList = this.userService.getAllUsers();
  }
}
