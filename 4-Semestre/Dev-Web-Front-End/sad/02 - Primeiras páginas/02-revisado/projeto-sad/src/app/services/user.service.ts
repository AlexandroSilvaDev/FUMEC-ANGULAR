import { Injectable } from '@angular/core';

import { Users } from '../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
    
  }
  
  email = "";
  password = "";

  public users: Array<Users> = [
      {
        id: 1,
        email: "thiago@fumec.br",
        password: "123",
        level: 91,
        team: "N1",
        name: "Thiago",
        photo: ""
      },
      {
        id: 2,
        email: "alexandro@fumec.br",
        password: "123",
        level: 92,
        team: "N1",
        name: "Alexandro",
        photo: ""
      },
      {
        id: 3,
        email: "raian@fumec.br",
        password: "123",
        level: 93,
        team: "N1",
        name: "Raian",
        photo: ""
      },
      {
        id: 4,
        email: "paulo@fumec.br",
        password: "123",
        level: 94,
        team: "N1",
        name: "Paulo",
        photo: ""
      },
      {
        id: 5,
        email: "lucas@fumec.br",
        password: "123",
        level: 95,
        team: "N1",
        name: "Lucas",
        photo: ""
      },
      {
        id: 6,
        email: "leia@fumec.br",
        password: "123",
        level: 81,
        team: "N2",
        name: "Leia",
        photo: ""
      },
      {
        id: 7,
        email: "eugenia@fumec.br",
        password: "123",
        level: 82,
        team: "N2",
        name: "Eugenia",
        photo: ""
      },
      {
        id: 8,
        email: "teo@fumec.br",
        password: "123",
        level: 83,
        team: "N2",
        name: "Teo",
        photo: ""
      },
      {
        id: 9,
        email: "rilbert@fumec.br",
        password: "123",
        level: 84,
        team: "N2",
        name: "Rilbert",
        photo: ""
      }
  ];

  public getTopUsers() {
    const ordered = this.users.sort((x, y) => y.level - x.level);
    const topUsers = ordered.slice(0, 3);
    return topUsers;
  }

  public getAllUsers() {
    return this.users;
  }

  public getN1Users() {
    const n1Users = this.users.filter((users) => users.team === "N1");
    return n1Users;
  }

  public getN2Users() {
    const n2Users = this.users.filter((users) => users.team === "N2");
    return n2Users;
  }

  public addUser(newUser: Users) {
    const id = this.users.length+1;
    newUser.id = id;
    this.users.push(newUser);
  }

  public deleteUser(id: number): void {
    const index = this.users.findIndex(user => user.id === id);

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
  
  /* 
  public getUserData(id: number): Users {
    for (let user of this.users) {
      if (user.id === id) {
        return user;
      }
    }

    return {
      id: 0,
      email: "",
      password: "",
      level: 0,
      team: "",
      name: "",
      photo: ""
    };
  }
  */
}