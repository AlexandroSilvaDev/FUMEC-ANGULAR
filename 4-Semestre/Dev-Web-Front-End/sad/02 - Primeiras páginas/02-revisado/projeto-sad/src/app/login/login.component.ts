import { Component } from '@angular/core';

import { Users } from '../interfaces/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  //canLog: boolean = true;

  public usersList: Users[] = [];

  constructor(private userService: UserService) {
    this.usersList = this.userService.obterTodos();
  }
  
  /*
  constructor() {

  }
  */
}
