import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {
  productService = inject(ProductService);

  productsSubscription!: Subscription;
  products!: Product[];

  hasDataLoaded = false;

  ngOnInit(): void {
    this.productsSubscription = this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.hasDataLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}

