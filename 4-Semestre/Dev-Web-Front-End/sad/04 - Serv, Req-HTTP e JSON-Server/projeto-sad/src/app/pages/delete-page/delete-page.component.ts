import { Component } from '@angular/core';
import { Users } from '../../model/users.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css'],
})
export class DeletePageComponent {
  // public user: Users = {
  //   id: 0,
  //   email: '',
  //   password: '',
  //   level: 0,
  //   team: '',
  //   name: '',
  //   photo: '',
  // };

  // constructor(private userService: UserService, private route: Router) {}

  // public register() {
  //   this.userService.addUser(this.user);
  //   this.route.navigate(['/manager-page']);
  // }
}
