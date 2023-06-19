import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  cadastroForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(private router: Router) {}
  ngOnInit() {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      // Processar o formulário de cadastro
      console.log(this.cadastroForm.value);
    }
  }
}
