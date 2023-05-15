import { Component } from '@angular/core';

import { Users } from '../interfaces/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent {

  user: any[] = [];

  constructor(private userService: UserService) {
    this.user = userService.getAllUsers();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }
}
