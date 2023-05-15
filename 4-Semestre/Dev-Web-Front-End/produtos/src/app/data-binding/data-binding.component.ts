import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public nome = "Chiquinha";
  public foto = "./../assets/img/peter-parker.jpg";

  public personagem = "Seu Madruga";


  public mensagem() {
    alert("Boa noite!");
  }
}
