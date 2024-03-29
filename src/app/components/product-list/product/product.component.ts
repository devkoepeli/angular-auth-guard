import { Component, input } from '@angular/core';
import { Product } from '../../../models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  product = input.required<Product>();

}
