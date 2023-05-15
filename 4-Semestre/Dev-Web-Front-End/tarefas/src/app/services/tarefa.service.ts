import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Tarefa } from 'src/app/models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  public async adicionar(tarefa: Tarefa) {
    await this.storage.set(tarefa.id, tarefa);
  }

  public async atualizar(tarefa: Tarefa) {
    await this.storage.set(tarefa.id, tarefa);
  }

  public async deletar(id: string) {
    await this.storage.remove(id);
  }

  public async obter(id: string): Promise<Tarefa> {
    const tarefaAux = await this.storage.get(id);

    return {
      ...tarefaAux
    };
  }

  public async carregar(): Promise<Tarefa[]> {
    let tarefas: Tarefa[] = [];
    await this.storage.forEach(function (valor, id, index) {
      tarefas.push(valor);
    });

    return tarefas;
  }
}
