import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {

  }

  public user: UserService = new UserService();

  logIn() {
    this.authService.logIn(this.user);
  }
}
