import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../model/users.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  public get(id: number) {
    return this.http.get<Users>('http://localhost:3000/users/'+id);
  }

  public add(user: Users) {
    const userJSON = JSON.stringify(user);
    return this.http.post('http://localhost:3000/users', userJSON, httpOptions);
  }

  public delete(id: number) {
    return this.http.delete('http://localhost:3000/users/'+id);
  }

  public update(user: Users) {
    const userJSON = JSON.stringify(user);
    return this.http.put('http://localhost:3000/users/'+user.id, userJSON, httpOptions);
  }

  public getUser(id: number): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/users').pipe(map(users => users.find(user => user.id === id)))
  }
}
