import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../../models/product.interface';
import { FilterService } from '../../../services/filter.service';
import { Filter } from '../../../models/filter.type';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {
  productService = inject(ProductService);
  filterService = inject(FilterService);

  productsSubscription!: Subscription;
  products!: Product[];
  initialProducts!: Product[];

  filterSubscription!: Subscription;

  hasDataLoaded = false;

  ngOnInit(): void {
    this.loadData();

    this.filterSubscription = this.filterService.filters$.subscribe(filters => {
      this.filterProducts(filters);
    })
  }

  loadData(): void {
    this.productsSubscription = this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.initialProducts = products;
      this.hasDataLoaded = true;
    })
  }

  filterProducts(filters: Filter[]): void {
    this.products = this.initialProducts;

    if (!filters.includes('all')) {
      const filteredProducts: Product[] = [];

      filters.forEach(filter => {
        this.products.forEach(product => {
          if (product.category === filter) {
            filteredProducts.push(product);
          }
        })
      })
      this.products = filteredProducts;
    }
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

}

