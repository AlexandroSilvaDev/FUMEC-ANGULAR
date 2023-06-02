import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Users } from 'src/app/model/users.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
              private authService: AuthService,
              private formBuilder: FormBuilder) {
  
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    // if (this.loginForm.invalid) {
    //   return;
    // }
    
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.logIn( email, password );

    console.log('Tentou logar');

    // .subscribe((response) => {
    //   if (response.success) {
    //     console.log("Login bem-sucedido", response.user);
        
    //   } else {
    //     console.log("Credenciais inválidas", response.message);
    //   }
    // });
  }
}
