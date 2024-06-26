import { Component, OnInit, inject } from '@angular/core';
import { Filter } from '../../../models/filter.type';
import { FilterService } from '../../../services/filter.service';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule, LogoutComponent],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent implements OnInit {
  
  filterService = inject(FilterService);

  isElectronicsChecked = false;
  isJeweleryChecked = false;
  isMensChecked = false;
  isWomensChecked = false;

  ngOnInit(): void {
    this.isElectronicsChecked = this.filterService.isFilterActive('electronics');
    this.isJeweleryChecked = this.filterService.isFilterActive('jewelery');
    this.isMensChecked = this.filterService.isFilterActive('men\'s clothing');
    this.isWomensChecked = this.filterService.isFilterActive('women\'s clothing');
  }

  changeFilterState(filter: Filter, isChecked: boolean) {
    if (isChecked) {
      this.filterService.setFilter(filter);
    } else {
      this.filterService.removeFilter(filter);
    }
  }
}