import { Injectable } from '@angular/core';

import { Users } from '../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public users: Users[] = [
      {
        level: 68,
        team: "N1",
        name: "Thiago",
        photo: ""
      },
      {
        level: 97,
        team: "N1",
        name: "Alexandro",
        photo: ""
      },
      {
        level: 89,
        team: "N2",
        name: "Raian",
        photo: ""
      }
  ];

  constructor() {
    
  }

  public obterTodos() {
    return this.users;
  }

  public obter(name: string): Users {
    for (let user of this.users) {
      if (user.name === name) {
        return user;
      }
    }

    return {
      level: 0,
      team: "",
      name: "",
      photo: ""
    };
  }
}