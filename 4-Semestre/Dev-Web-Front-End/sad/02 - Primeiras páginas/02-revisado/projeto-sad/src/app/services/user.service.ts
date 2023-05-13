import { Injectable, OnInit } from '@angular/core';

import { Users } from '../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  public users: Array<Users> = [
      {
        id: 1,
        name: "Thiago",
        team: "N1",
        photo: "",
      },
  
      {
        id: 2,
        name: "Alexandro",
        team: "N1",
        photo: "",
      },
  
      {
        id: 3,
        name: "Raian",
        team: "N2",
        photo: "",
      }
  ]

  public obterTodos() {
    return this.users;
  }

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
