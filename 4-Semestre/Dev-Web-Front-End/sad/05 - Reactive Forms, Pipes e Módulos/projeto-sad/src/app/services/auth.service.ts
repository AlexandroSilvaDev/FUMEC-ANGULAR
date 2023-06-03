import { EventEmitter, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/users';
  private canLog: boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();
  isManagerEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
              private  http: HttpClient) { 

  }
  
  public logIn(email: string, password: string): Observable<any> {
    return this.http.get(this.usersUrl).pipe(
      map((users: any) => {
        const foundUser = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
        if (foundUser) {
          this.canLog == true;
          this.showMenuEmitter.emit(true);

          if (foundUser.name === 'Thiago' || foundUser.name === 'Alexandro' || foundUser.name === 'Raian' || foundUser.name === 'Vitor') {
            this.router.navigate(['/manager-page/']);
            this.isManagerEmitter.emit(true);
          } else {
            this.router.navigate(['/dashboard/' + foundUser.id]);
          }

          return { success: true, user: foundUser };
        } else {
          return { success: false, message: 'Credenciais inválidas' };
        }
      })
    );
  }

  logout() {
    this.showMenuEmitter.emit(false);
    this.canLog = false;
  }
}
