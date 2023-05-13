import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoService } from '../services/produto.service';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent {
  public produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    foto: '',
    descricao: ''
};

  constructor(private produtoService: ProdutoService,
              private rota: Router) {

  }

  public cadastrar() {
    this.produtoService.adicionar(this.produto);
    this.rota.navigate(['/produtos']);
  }
}
