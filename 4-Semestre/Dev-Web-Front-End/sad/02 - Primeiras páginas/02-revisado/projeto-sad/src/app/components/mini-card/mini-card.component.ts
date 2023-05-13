import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users } from 'src/app/interfaces/Users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {

  public user: Users = {
    level: 0,
    team: "",
    name: '',
    photo: ""
  };

  constructor(private rotaAtiva: ActivatedRoute,
              private userService: UserService) {
    
  }

  ngOnInit(): void {
   const name = String(this.rotaAtiva.snapshot.paramMap.get('name'));
   
   this.user = this.userService.obter(name);
  }

  /*
  public usersList: Users[] = [];

  constructor(public userService: UserService) {
    this.usersList = this.userService.obterTodos();
  }
  */
}
