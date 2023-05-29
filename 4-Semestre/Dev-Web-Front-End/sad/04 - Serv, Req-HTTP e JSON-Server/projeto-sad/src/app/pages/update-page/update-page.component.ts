import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Users, createUser } from 'src/app/model/users.model';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent {
  searchTerm: string = "";
  searchResult: any;
  // searchResult: Users = createUser();

  constructor(private userService: UserService,
              private route: Router) {
    
  }

  public searchUser() {
    this.userService.getUserByName(this.searchTerm).subscribe((result) => {
      this.searchResult = result;
    })
  }

  public update() {
    this.userService.update(this.searchResult).subscribe((user) => {
      this.route.navigate(['/manager-page']);
    });
  }
}
