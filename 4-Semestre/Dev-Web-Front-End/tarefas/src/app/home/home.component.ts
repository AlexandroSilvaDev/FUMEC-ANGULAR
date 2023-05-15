import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tarefasLista: Tarefa[] = [
    
  ];

  public hoje: number = Date.now();

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.listar();
  }

  public listar() {
    this.tarefaService.carregar().then((tarefas: Tarefa[])=>{
      this.tarefasLista = tarefas;
    });
  }

  public async delete(id: string) {
    await this.tarefaService.deletar(id);
    this.listar();
  }
  
}
