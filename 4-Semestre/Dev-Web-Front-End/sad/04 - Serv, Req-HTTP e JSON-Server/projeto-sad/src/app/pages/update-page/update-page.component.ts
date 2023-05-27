import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Users, createUser } from 'src/app/model/users.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent {
  // public user: Users = createUser();
  myForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private route: Router) {
    this.myForm = this.formBuilder.group({
      id: [''],
      email: [''],
      password: [''],
      // level: [''],
      team: [''],
      name: [''],
      // photo: [''],
    });
  }

  public searchUser() {
    const id = this.myForm.get('id')?.value;
    this.userService.getUser(id).subscribe((user) => {
      // this.user = user;
      this.myForm.patchValue(user);
      console.log(user);
      
    });
  }

  // public update() {
  //   this.userService.update(this.user).subscribe((user) => {
  //     this.route.navigate(['/manager-page']);
  //   });
  // }
}
