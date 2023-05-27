import { EventEmitter, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Users } from '../model/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private canLog: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logIn(user?: Users) {
    console.log("logado");
  //   let data = user.;
  //   let id;
  //   data.map( (find) => {
  //     if (user.email === find.email && user.password === find.password) {
  //       this.canLog = true;
  //       id = find.id;
  //     }
  //   });
  //   if (this.canLog === true) {
  //     this.showMenuEmitter.emit(true);
  //     this.router.navigate(['/dashboard']);
  //     console.log(id);
      
  //   } else {
  //     this.showMenuEmitter.emit(false);
  //     this.canLog = false;
  //     user.email = '';
  //     user.password = '';
  //     alert('Usuário não encontrado');
  //   }
  // }

  // logout() {
  //   this.showMenuEmitter.emit(false);
  //   this.canLog = false;
  // }
  }
}
