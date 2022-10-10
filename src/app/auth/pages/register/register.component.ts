import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myForm : FormGroup = this.fb.group ({
    name: ['jordi', [ Validators.required, Validators.minLength(2) ]],
    email: ['test@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor (
    private fb: FormBuilder,
    private router: Router
    ) { }

  register() {
    console.log(this.myForm.value);
    this.router.navigateByUrl('dashboard');
  }

}
