import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {
  public produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    foto: '',
    descricao: ''
  };

  

  constructor(private rotaAtiva: ActivatedRoute,
              private produtoService: ProdutoService) {

  }

  ngOnInit() {
    const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.produto = this.produtoService.obter(codigo);

    console.log(codigo);
  }

}
