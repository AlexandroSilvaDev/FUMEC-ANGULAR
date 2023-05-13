import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {
  members1 = [
    {member: "Thiago"},
    {member: "Alexandro"},
    {member: "Raian"},
    {member: "Lucas"},
    {member: "Gabriel"}
  ];

  members2 = [
    {member: "Thiago"},
    {member: "Alexandro"},
    {member: "Raian"},
    {member: "Lucas"},
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
