import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent {
  public exibir: boolean = true;
  public novoProduto: string = "";

  public produtos: Array<string> = [
   "Feijão",
   "Arroz",
   "Queijo",
   "Frango",
   "Goiabada"
  ];

  public mostrar() {
    this.exibir = !this.exibir;
  }

  public adicionar() {
    this.produtos.push(this.novoProduto);
  }

  public remover() {
    this.produtos.pop();
  }
}
