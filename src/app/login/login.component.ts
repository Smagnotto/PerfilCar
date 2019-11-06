import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  isPasswordOrUserInvalid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }

  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password')
  }

  onSubmit() {
    this.isPasswordOrUserInvalid = false;
    if (this.formLogin.valid) {
      if (this.username.value == "admin" && this.password.value == "123") {
      this.router.navigate['/veiculo/lista'];
      }else {
        this.isPasswordOrUserInvalid = true;
      }
    }
  }
}
