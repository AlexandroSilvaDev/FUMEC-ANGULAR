import { Component, Input } from '@angular/core';

import { Users } from 'src/app/interfaces/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public UsersList: Array<Users> = [];

  constructor(private userService: UserService) {
    this.UsersList = this.userService.getAllUsers();
  }

  /*
  public n1UsersList: Array<Users> = [];

  constructor(private userService: UserService) {
    this.n1UsersList = this.userService.getN1Users();
  }
  */

}
