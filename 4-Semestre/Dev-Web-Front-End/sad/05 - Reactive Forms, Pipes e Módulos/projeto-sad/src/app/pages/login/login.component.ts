import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  hoje: number = Date.now();

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formLogin.invalid) {
      return;
    }
    
    const email = this.formLogin.controls['email'].value;
    const password = this.formLogin.controls['password'].value;

    this.authService.logIn( email, password ).subscribe(
      response => {
        if (response.success) {
          console.log('Login bem sucedido', response.user);
        } else {
          alert(response.message);
        }
      }
    )
  }
}
