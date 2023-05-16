import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { Users } from '../interfaces/Users';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public user: Users = {
    id: 0,
    email: "",
    password: "",
    level: 0,
    team: "",
    name: "",
    photo: ""
  };

  constructor(private userService: UserService,
              private route: Router) {

  }

  public register() {
    this.userService.addUser(this.user);
    this.route.navigate(['/manager-page']);
  }

}
