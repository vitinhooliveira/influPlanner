import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiTestService } from '../../../apis/api-test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  hide = true;
  msgAlerta: boolean = false;
  jsonLogin = require('../../../../json/login.json');

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public apiTestService: ApiTestService
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      emailForm: new FormControl('', [Validators.required, Validators.email]),
      senhaForm: new FormControl('', [Validators.required, Validators.min(2)]),
    });
  }

  redirectHome() {
    let login = this.formulario.value.emailForm;
    let senha = btoa(this.formulario.value.senhaForm);

    this.apiTestService.apiLoginApp(login, senha).subscribe({
      next: (res: any) => {
        if (res.message) {
          this.router.navigate(['/home']);
        }
      },
      error: (erro: any) => {
        if (erro.error.error) {
          this.msgAlerta = true;
          setTimeout(() => {
            this.msgAlerta = false;
          }, 1500);
        }
      },
    });
  }

  getErrorMessageLogin() {
    if (this.formulario.controls['emailForm'].hasError('required')) {
      return 'Coloquei seu email de cadastro';
    }

    return this.formulario.controls['emailForm'].hasError('email')
      ? 'Coloque um email valido'
      : '';
  }

  getErrorMessageSenha() {
    if (this.formulario.controls['senhaForm'].hasError('required')) {
      return 'Coloquei sua senha';
    }

    return this.formulario.controls['senhaForm'].hasError('min')
      ? 'Coloque uma senha valida'
      : '';
  }
}
