import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/servicos/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: ['funcionario@empresa.com', [Validators.required, Validators.email]],
    senha: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  cadastrar() {
    if (this.form.invalid) {
      return;
    }
    const login: Login = this.form.value;
    this.loginService.logar(login).subscribe(
      dados => {
        localStorage['token'] = dados.data.token;
        this.router.navigate(['/']);
      },
      erro => {
        if (erro.status === 401) {
          alert('Email ou senha inválido(s).');
        } else if (erro.status === 400) {
          alert(erro.error.errors.join());
        } else {
          alert('Erro relizando login. Tente novamente.')
        }
      }
    );
  }

   emailErroMsg() {
    const email = this.form.controls.email;
    return email.touched && email.errors;
  }
  
  erroMsg(campo: string) {
    const control = this.form.controls[campo];
    return control.touched && control.errors;
  }

  cssValidacao(campo: string) {
    const control = this.form.controls[campo];
    if (control.touched) {
      return control.errors ? 'is-invalid' : 'is-valid';
    }
    return '';
  }
  
}
