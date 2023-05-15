import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-tarefa-nova',
  templateUrl: './tarefa-nova.component.html',
  styleUrls: ['./tarefa-nova.component.css']
})
export class TarefaNovaComponent implements OnInit {
  public categorias: string[] = ['domestico',
  'pessoal',
  'trabalho'
  ];

  public categoriaSelecionada: string = "";
  public dataSelecionada: string = new Date().toISOString();
  
  public minhaTarefa: Tarefa = {
    id: '',
    nome: '',
    data: '',
    prioridade: '',
    categoria: ''
  };

  constructor(private tarefaServ: TarefaService,
              private rota: Router) { }
  
  ngOnInit(): void {

  }

  public async adicionar() {
    let uid: any = Date.now();
    uid = uid.toString(16); //Converte a data armazenada na variável uid para um valor String hexadecimal

    this.minhaTarefa.id = uid;
    this.minhaTarefa.data = this.dataSelecionada;
    this.minhaTarefa.categoria = this.categoriaSelecionada;

    if (this.minhaTarefa.nome && this.minhaTarefa.data && this.minhaTarefa.categoria) {
      this.tarefaServ.adicionar(this.minhaTarefa).then(()=>{
        this.rota.navigate(['/home']);
      });
    }
  }

  public selecionarCategoria(indice: number) {
    this.categoriaSelecionada = this.categorias[indice];
  }
}