import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Users } from 'src/app/model/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user?: Users;

  constructor(private authService: AuthService) {

  }

  logIn() {
    this.authService.logIn(this.user);
  }
}
