import { Component, inject } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../../services/product.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productService = inject(ProductService);

  products$!: Subscription;
  products!: Product[];

  hasDataLoaded = false;

  ngOnInit() {
    this.products$ = this.productService.getProducts().subscribe(products => {
      this.hasDataLoaded = false;
      this.products = products;
      this.hasDataLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }

}

