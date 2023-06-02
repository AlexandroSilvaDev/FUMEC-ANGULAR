import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Users } from '../model/users.model';
import { UserService } from './user.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  public users: Users[] = [];
  // private canLog: boolean = false;
  // showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
              private userService: UserService) { 

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users: Users[]) => {
      this.users = users;
    });
  }
  
  logIn(email: string, password: string) {
    return this.users.map((users) => {
      // .find(user => find.email === email && find.password === password);
      this.users.find(user => {
        if (user.email === email && user.password === password) {
          console.log("encontrei");
          this.router.navigate(['/dashboard']);
          console.log("Tentei ir para a página");
          
          // this.canLog = true;
        } else {
          alert("Usuário não encontrado!");
          console.log("Não encontrei");
          
        }
      })

      // if (this.canLog === true) {
      //   this.showMenuEmitter.emit(true);
      //   this.router.navigate(['/dashboard']);
      // } else {
      //   this.showMenuEmitter.emit(false);
      //   alert("Usuário não encontrado!");
      // }
    })

    // this.users.map( (find) => {
    //   if (this.users === find.email && user.password === find.password) {
    //     this.canLog = true;
    //     id = find.id;
    //   }
    // });
    // if (this.canLog === true) {
    //   this.showMenuEmitter.emit(true);
    //   this.router.navigate(['/dashboard']);
    //   console.log(id);
      
    // } else {
    //   this.showMenuEmitter.emit(false);
    //   this.canLog = false;
    //   user.email = '';
    //   user.password = '';
    //   alert('Usuário não encontrado');
    // }
  }

  // logout() {
  //   this.showMenuEmitter.emit(false);
  //   this.canLog = false;
  // }
}
