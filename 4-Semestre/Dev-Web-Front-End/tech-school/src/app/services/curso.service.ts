import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Curso } from 'src/app/model/curso.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://localhost:3000/cursos')
  }

  public get(id: number) {
    return this.http
    .get<Curso>('http://localhost:3000/cursos/'+id);
  }

  public add(curso: Curso) {
    const cursoJSON = JSON.stringify(curso);
    return this.http.post('http://localhost:3000/cursos',
      cursoJSON,
      httpOptions
    );
  }

  public delete(id: number) {
    return this.http
    .delete('http://localhost:3000/cursos/'+id);
  }


  
  public update(curso: Curso) {
    const cursoJSON = JSON.stringify(curso);
    return this.http
    .put('http://localhost:3000/cursos/'+curso.id,
      cursoJSON,
      httpOptions
    );
  }

}
