import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/service/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  returnUrl: string;
  error = '';

  constructor(private router: Router, 
    private authenticationService: AuthenticationService, 
    private route: ActivatedRoute) { 
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/veiculos']);
    }
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password')
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.authenticationService.login(this.username.value, this.password.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
          });
    }
  }
}
