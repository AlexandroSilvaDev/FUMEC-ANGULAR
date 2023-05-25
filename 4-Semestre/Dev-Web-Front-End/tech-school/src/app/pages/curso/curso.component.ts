import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso, createCurso } from 'src/app/model/curso.model';

import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  public curso: Curso = createCurso();

  constructor(private rotaAtiva: ActivatedRoute,
              private cursoServ: CursoService) {

  }

  ngOnInit() {
    const id = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
  
    this.cursoServ.get(id).subscribe((curso)=>{
      console.log(curso);
    })
  }
}
