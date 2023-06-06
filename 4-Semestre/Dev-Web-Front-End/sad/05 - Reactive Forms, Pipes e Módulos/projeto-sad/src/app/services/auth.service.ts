import { EventEmitter, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/users';
  showMenuEmitter = new EventEmitter<boolean>();
  public isManager: boolean = false;

  constructor(private router: Router,
              private  http: HttpClient) { 

  }
  
  public logIn(email: string, password: string): Observable<any> {
    return this.http.get(this.usersUrl).pipe(
      map((users: any) => {
        const foundUser = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
        if (foundUser) {
          this.showMenuEmitter.emit(true);

          if (foundUser.name === 'Thiago' || foundUser.name === 'Alexandro' || foundUser.name === 'Raian' || foundUser.name === 'Vitor') {
            this.router.navigate(['/manager-page/']);
            this.isManager = true;
          } else {
            this.router.navigate(['/dashboard/' + foundUser.id]);
            this.isManager = false;
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
  }
}
