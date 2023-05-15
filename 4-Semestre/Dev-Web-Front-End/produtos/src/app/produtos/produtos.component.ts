import { Component } from '@angular/core';

import { Produto } from '../model/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  public produtosLista: Array<Produto> = [ ];

  constructor(private produtoService: ProdutoService) {
    this.produtosLista = this.produtoService.obterTodos();
  }
}
