import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ['aratar79@gmail.com', [Validators.required, Validators.email]],
    password: ['Password123!!', [Validators.required, Validators.minLength(6)]],
  });

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) { }

  login() {

    const { email, password } = this.myForm.value;

    this.authService.login(email, password)
      .subscribe(resp => {
        console.log(resp);
      }); 
    // this.router.navigateByUrl('dashboard');
  }
}
