import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users } from 'src/app/model/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user?: Users;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((item) => (this.user = item.data));
  }
  
  // public users: Users[] = [];

  // constructor(private userService: UserService) {
    
  // }

  // ngOnInit(): void {
  //   this.userService.getAll().subscribe((users: Users[]) => {
  //     this.users = users;

  //     console.log(this.users);
  //   });
  // }

  // public refresh() {
  //   this.userService.update(this.user).subscribe((response) => {
  //     this.route.navigate(['/dashboard'])
  //   })
  // }
}
