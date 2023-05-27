import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { Users, createUser } from '../../model/users.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  public user: Users = createUser();

  constructor(private userService: UserService,
              private route: Router) {

  }

  public register() {
    this.userService.add(this.user).subscribe((user) => {
      this.route.navigate(['/manager-page']);
    });
  }
}
