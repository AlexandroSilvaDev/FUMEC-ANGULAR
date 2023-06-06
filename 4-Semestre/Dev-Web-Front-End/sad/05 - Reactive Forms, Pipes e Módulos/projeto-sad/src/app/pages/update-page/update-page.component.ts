import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/model/users.model';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css'],
})
export class UpdatePageComponent {
  searchForm!: FormGroup;
  userForm!: FormGroup;
  foundUser?: Users;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private route: Router) {
    this.searchForm = this.formBuilder.group({
      name: ['']
    });
    
    this.userForm = this.formBuilder.group({
      id: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      level: new FormControl(''),
      team: new FormControl(''),
      name: new FormControl(''),
      photo: new FormControl('')
    });
  }

  searchUser(name: string): void {
    this.userService.getUserByName(name).subscribe((users) => {
      this.foundUser = users.find((user: { name: string; }) => user.name === name);
      if (this.foundUser) {
        this.userForm.patchValue(this.foundUser);
      }
    });
  }

  updateUser() {
    const updatedUser = this.userForm.value as Users;

    this.userService.update(updatedUser).subscribe((user) => {
      this.route.navigate(['/manager-page']);
    });

    console.log(updatedUser);
    
  }
}
