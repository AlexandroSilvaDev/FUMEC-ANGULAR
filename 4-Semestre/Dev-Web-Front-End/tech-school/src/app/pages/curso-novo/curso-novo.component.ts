import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso, createCurso } from 'src/app/model/curso.model';

@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css']
})
export class CursoNovoComponent {
  public curso: Curso = createCurso();

  constructor(private cursoServ: CursoService,
              private rota: Router) {

  }

  public cadastrar() {
    this.cursoServ.add(this.curso).subscribe((resposta)=>{
      console.log(resposta);

      this.rota.navigate(['/home']);
    })
  }
}
