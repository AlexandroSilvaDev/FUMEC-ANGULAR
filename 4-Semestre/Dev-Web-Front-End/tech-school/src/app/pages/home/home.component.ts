import { Component, OnInit } from '@angular/core';

import { CursoService } from 'src/app/services/curso.service';
import { Curso } from '../../model/curso.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cursos: Curso[] = [];

  constructor(private cursoServ: CursoService) {

  }

  ngOnInit(): void {
    this.cursoServ.getAll().subscribe((cursos: Curso[])=>{
      this.cursos = cursos;

      console.log(this.cursos);
    });
  }

  
}
