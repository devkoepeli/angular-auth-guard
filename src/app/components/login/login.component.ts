import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formBuilder = inject(FormBuilder);

  isEmailFocused = false;
  isPasswordFocused = false;
  isFormSubmitted = false;

  loginForm = this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.pattern('[^@]+@[^\.]+\..+')
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
    ]]
  })

  submitForm(): void {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      this.email?.disable();
      this.password?.disable();

      this.email?.enable();
      this.password?.enable();
      this.isFormSubmitted = false;
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}