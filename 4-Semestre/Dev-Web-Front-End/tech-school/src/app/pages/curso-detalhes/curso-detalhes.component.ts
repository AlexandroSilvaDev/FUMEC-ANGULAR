import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursoService } from 'src/app/services/curso.service';
import { Curso, createCurso } from 'src/app/model/curso.model';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent {
  public curso: Curso = createCurso();

  constructor(private rotaAtiva: ActivatedRoute,
              private cursoServ: CursoService,
              private rota: Router) {

  }

  ngOnInit() {
    const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.cursoServ.get(codigo).subscribe((curso)=>{
      this.curso = curso;
    })
  }

  public atualizar() {
    this.cursoServ.update(this.curso).subscribe((resposta)=>{
      this.rota.navigate(['/home']);
    });
  }
}
