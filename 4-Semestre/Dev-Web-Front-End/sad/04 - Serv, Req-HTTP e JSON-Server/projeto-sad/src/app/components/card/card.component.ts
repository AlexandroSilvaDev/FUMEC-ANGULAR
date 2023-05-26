import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users, createUser } from 'src/app/model/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public user: Users = createUser();

  constructor(private rotaAtiva: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit(): void {
    const id = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.userService.get(id).subscribe((user) => {
      console.log(user);

      this.user = user;
    });
  }

  // public users: Users[] = [];

  // constructor(private userService: UserService) {

  // }

  // ngOnInit(): void {
  //   this.userService.getAll().subscribe((users: Users[])=> {
  //     this.users = users;

  //     console.log(this.users);
      
  //   });
  // }
}
