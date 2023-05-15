import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { TarefaAtualizaComponent } from './tarefa-atualiza/tarefa-atualiza.component';
import { TarefaNovaComponent } from './tarefa-nova/tarefa-nova.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nova',
    component: TarefaNovaComponent
  },
  {
    path: 'atualiza/:id',
    component: TarefaAtualizaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
