import { Component } from '@angular/core';
import { FormGroup, FormBuilder, 
  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public alunoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.alunoForm = this.formBuilder.group({
      nome: ['', Validators.compose([
                    Validators.required, 
                    Validators.minLength(3),
                    Validators.maxLength(150)
                  ]) 
            ],
      email:['', Validators.compose([
                    Validators.required, 
                    Validators.email
                  ])
          ]
    });
  }

  public registrar() {
    console.log(this.alunoForm);
  }
}
