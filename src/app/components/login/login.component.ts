import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  isEmailFocused = false;
  isPasswordFocused = false;
  isFormSubmitted = false;
  authError = false;

  loginForm = this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.pattern('[^@]+@[^\\.]+\\..+')
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
    ]]
  })

  // Elementary for authentication guard: LoginComponent, LogoutComponent, ProductService, AuthService, AuthGuard, AppRoutes
  submitForm(): void {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;

      if (this.authService.canLogin(email!, password!)) {
        this.router.navigate(['/products'])
      } else {
        this.authError = true;
        setTimeout(() => {
          this.authError = false;
        }, 5000);
      }

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