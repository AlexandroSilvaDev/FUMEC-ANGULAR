import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Users, createUser } from 'src/app/model/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public user: Users = createUser();

  constructor(private activedRoute: ActivatedRoute,
              private userService: UserService,
              private route: Router) {

  }

  ngOnInit() {
    const id = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.userService.get(id).subscribe((user) => {
      this.user = user;
    });
  }

  public refresh() {
    this.userService.update(this.user).subscribe((response) => {
      this.route.navigate(['/dashboard'])
    })
  }
}
