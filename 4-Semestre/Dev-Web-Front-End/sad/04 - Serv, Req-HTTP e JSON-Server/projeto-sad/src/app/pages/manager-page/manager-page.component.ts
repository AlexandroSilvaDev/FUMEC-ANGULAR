import { Component, OnInit } from '@angular/core';

import { Users } from 'src/app/model/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css'],
})
export class ManagerPageComponent implements OnInit{
  public users: Users[] = [];


  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users: Users[]) => {
      this.users = users;

      console.log(this.users);
    });
  }
}
