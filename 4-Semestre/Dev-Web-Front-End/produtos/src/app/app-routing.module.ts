import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { HomeComponent } from './home/home.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';

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
    path: 'binding',
    component: DataBindingComponent
  },
  {
    path: 'diretivas-estruturais',
    component: DiretivasEstruturaisComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'produto-novo',
    component: ProdutoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
