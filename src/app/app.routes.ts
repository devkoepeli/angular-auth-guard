import { Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'products', component: ProductPageComponent, canActivate: [authGuard] }
];
