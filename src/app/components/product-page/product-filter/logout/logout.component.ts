import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  
  router = inject(Router);
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
