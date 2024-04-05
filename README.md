# Auth Guard in Angular: Protecting Routes

This project demonstrates the auth guard `canActivate` in order to protect routes from unauthorized access. Such protection is essential for web applications that process personal data or sensitive business information. The Auth Guard ensures that only authenticated users can access certain pages. If the verification fails, there is an automatic redirection to the login page.

## Core Features

- **Auth Guard Implementation:** A detailed look at the `canActivate` method, which decides whether a route is activated.
- **Integration of a Fake Store REST API:** Use of an external API to display random product data on the product page after logging in.
- **Secure API Access:** Sending an arbitrary Bearer Token in HTTP requests to demonstrate an authentication mechanism.

### Key Elements of this Application:

- **Authentication Components:** LoginComponent, LogoutComponent
- **Services:** ProductService, AuthService
- **Routing:** AuthGuard, AppRoutes

### Login

Use the following data to get authenticated and login:

- **Email:** "test@test.com"
- **Password:** "Test1234"