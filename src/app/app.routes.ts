import { Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Products', component: ProductPageComponent }
];
