import { Component } from '@angular/core';

import { Users } from 'src/app/interfaces/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {

  public usersList: Array<Users> = [];

  constructor(private userService: UserService) {
    this.usersList = this.userService.getAllUsers();
  }

}
