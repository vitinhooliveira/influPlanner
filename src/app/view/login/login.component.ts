import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  hide = true;
  msgAlerta:boolean= false
  jsonLogin = require('../../../../json/login.json');

  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      emailForm: new FormControl('', [Validators.required, Validators.email]),
      senhaForm: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  redirectHome() {
    this.jsonLogin.login.forEach((element: any) => {
      if (
        element.email === this.formulario.value.emailForm &&
        element.senha === this.formulario.value.senhaForm
      ) {
        this.router.navigate(['/home']);
      }else{
        this.msgAlerta = true
        setTimeout(()=>{
          this.msgAlerta = false
        }, 1500)
      }
    });
  }
}
