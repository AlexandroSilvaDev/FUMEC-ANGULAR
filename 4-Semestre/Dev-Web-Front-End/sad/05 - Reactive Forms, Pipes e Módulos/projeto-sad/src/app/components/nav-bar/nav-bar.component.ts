import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showLink: boolean = false;

  constructor(private authService: AuthService) {
    
  }

  ngOnInit(): void {
    this.showLink = this.authService.isManager;
    console.log(this.showLink);
    
  }
  
  logout() {
    this.authService.logout();
  }
}