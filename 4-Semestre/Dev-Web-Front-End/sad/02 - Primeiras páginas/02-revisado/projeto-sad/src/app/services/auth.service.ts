import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private canLog: boolean = false;

  constructor(private router: Router) {}

  logIn(user: UserService) {
    let data = user.users;
    data.map( (find) => {
      if (user.email === find.email && user.password === find.password) {
        this.canLog = true;
      }
    });
    if (this.canLog === true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.canLog = false;
      user.email = '';
      user.password = '';
      alert('Usuário não encontrado');
    }
  }
}
