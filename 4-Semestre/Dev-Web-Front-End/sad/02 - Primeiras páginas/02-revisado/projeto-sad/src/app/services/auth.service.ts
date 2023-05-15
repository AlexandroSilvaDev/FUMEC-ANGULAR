import { EventEmitter, Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private canLog: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  logIn(user: UserService) {
    let data = user.users;
    data.map( (find) => {
      if (user.email === find.email && user.password === find.password) {
        this.canLog = true;
      }
    });
    if (this.canLog === true) {
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/dashboard']);
    } else {
      this.showMenuEmitter.emit(false);
      this.canLog = false;
      user.email = '';
      user.password = '';
      alert('Usuário não encontrado');
    }
  }
}
