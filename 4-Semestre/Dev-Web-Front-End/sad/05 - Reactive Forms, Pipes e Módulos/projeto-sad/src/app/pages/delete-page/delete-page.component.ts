import { Component } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-page',
  templateUrl: './delete-page.component.html',
  styleUrls: ['./delete-page.component.css'],
})
export class DeletePageComponent {
  deleteForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private route: Router) {
    this.deleteForm = this.formBuilder.group({
      id: ['']
    });
  }

  public delete() {
    const id = this.deleteForm.get('id')?.value;
    this.userService.delete(id).subscribe((user) => {
      this.route.navigate(['/manager-page']);
    });
  }
}
