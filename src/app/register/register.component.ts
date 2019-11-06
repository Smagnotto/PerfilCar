import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../shared/MustMatch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fbuilder: FormBuilder, private router: Router) { }

  formRegister: FormGroup
  submitted: boolean = false;

  ngOnInit() {
    this.formRegister = this.fbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  get firstName() {
    return this.formRegister.get('firstName')
  }

  get lastName() {
    return this.formRegister.get('lastName')
  }

  get email() {
    return this.formRegister.get('email')
  }

  get password() {
    return this.formRegister.get('password')
  }

  get confirmPassword() {
    return this.formRegister.get('confirmPassword')
  }

  onSubmit() {
    if (this.formRegister.valid) {
      // Cria o cadastro

      this.router.navigate['/login'];
    }
  }

}
