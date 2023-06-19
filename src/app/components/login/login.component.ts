import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { User } from './model/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(private router: Router, private loginService: LoginService) {}
  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
  }

  login():void {
    const userData: User = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.loginService.login(userData).subscribe(
      response => {
        this.router.navigate(['/homepage']);
      },
      error => {
        console.error(error);
        if (error.status === 400) {
          this.errorMessage = "Erro no email ou na senha"; // Define a mensagem de erro
        }
      }
    );
  }
}
