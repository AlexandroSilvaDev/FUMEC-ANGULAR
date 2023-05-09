import { Component } from '@angular/core';

import { SistemaService } from '../services/sistema.service';
import { Funcionario } from '../model/funcionario.model';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent 
{
  public novoFuncionario: string = "";

  public funcionariosLista: Array<Funcionario> = [];

  constructor(private sistemaService: SistemaService)
  {
    this.funcionariosLista = this.sistemaService.obterTodos();
  }
}
