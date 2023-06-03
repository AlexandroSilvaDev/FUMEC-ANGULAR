import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/model/users.model';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css'],
})
export class MiniCardComponent implements OnInit {
  public users: Users[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users: Users[])=> {
      const topUsers = users.sort((x, y) => y.level - x.level).slice(0, 3);
      this.users = topUsers;
    });
  }
}
