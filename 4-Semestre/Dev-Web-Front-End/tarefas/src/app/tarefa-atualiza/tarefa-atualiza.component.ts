import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefa-atualiza',
  templateUrl: './tarefa-atualiza.component.html',
  styleUrls: ['./tarefa-atualiza.component.css']
})
export class TarefaAtualizaComponent implements OnInit {

  public minhaTarefa: Tarefa = {
    id: '',
    nome: '',
    data: '',
    categoria: '',
    prioridade: ''
  };

  public categorias: string [] = ['doméstica', 'pessoal', 'trabalho'];
  public categoriaSelecionada: string = "";
  public dataSelecionada: string = "";

  constructor ( private rota: Router, 
                private tarefaServ: TarefaService,
                private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.rotaAtiva.snapshot.paramMap.get('id') || "";

    this.tarefaServ.obter(id).then((tarefa: Tarefa) => {
      this.minhaTarefa = tarefa;

      this.categoriaSelecionada = this.minhaTarefa.categoria;
      this.dataSelecionada = this.minhaTarefa.data;
    });
  }

  public selecionarCategoria(indice: number) {
    this.categoriaSelecionada = this.categorias[indice];
  }

  public async editar() {
    this.minhaTarefa.categoria = this.categoriaSelecionada;
    this.minhaTarefa.data = this.dataSelecionada;
    await this.tarefaServ.atualizar(this.minhaTarefa);
    this.rota.navigate(['/home']);
  }
}
