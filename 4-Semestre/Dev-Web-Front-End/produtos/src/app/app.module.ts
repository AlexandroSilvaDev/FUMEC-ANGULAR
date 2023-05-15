import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HeaderComponent } from './header/header.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataBindingComponent,
    HeaderComponent,
    DiretivasEstruturaisComponent,
    ProdutosComponent,
    ProdutoDetalhesComponent,
    ProdutoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
