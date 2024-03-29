import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent, ProductFilterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

}
