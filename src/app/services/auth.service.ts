import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  // key in localstorage
  private authTokenKey = 'Bearer Token';

  constructor() {
    // on each start of the application the localstorage gets checked if user is authenticated / if a token is existant
    // to allow the auth guard to give access to the specific route or to let it redirect to login page
    this.isAuthenticated = !!localStorage.getItem(this.authTokenKey);
  }

  canLogin(email: String, password: String): boolean {
    // define test user for authentication of this one user
    if (email === "test@test.com" && password == "Test1234") {
      const authToken = this.generateAuthToken();
      // save authToken as the value of the key in localstorage
      localStorage.setItem(this.authTokenKey, authToken);
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    this.isAuthenticated = false;
  }

  generateAuthToken(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.';
    let authToken = '';

    for (let i = 0; i < 32; i++) {
      authToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return authToken;
  }

}
