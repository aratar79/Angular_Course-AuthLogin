import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm : FormGroup = this.fb.group ({
    email: ['test@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor (
    private fb: FormBuilder,
    private router: Router
    ) { }

  login() {
    console.log(this.myForm.value);
    this.router.navigateByUrl('dashboard');
  }

}
