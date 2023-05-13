import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { Users } from '../interfaces/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public users: Array<Users> = [
    {
      id: 1,
      name: "Thiago",
      team: "N1",
      photo: "",
    },

    {
      id: 2,
      name: "Alexandro",
      team: "N1",
      photo: "",
    },

    {
      id: 3,
      name: "Raian",
      team: "N2",
      photo: "",
    }
]
  /*canLog: boolean = true;

  public userList: Array<Users> = [];

  constructor(private userService: UserService) {
    this.userList = this.userService.obterTodos();
  }
  */

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
