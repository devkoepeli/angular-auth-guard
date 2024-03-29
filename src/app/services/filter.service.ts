import { Injectable, signal } from '@angular/core';
import { Filter } from '../models/filter.type';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters = signal<Filter[]>(['all']);

  constructor() { }

  setFilter(filter: Filter): void {
    this.filters.update(filters => {
      const updatedFilters = filters.filter(f => f !== 'all' && f !== filter);
      updatedFilters.push(filter);
      return updatedFilters;
    })
  }

  getFilter(): Filter[] {
    return this.filters();
  }

  removeFilter(filter: Filter): void {
    this.filters.update(filters => filters
      .filter(f => f !== filter));

    if (this.filters().length === 0) {
      this.filters.set(['all']);
    }
  }

  isFilterActive(filter: Filter): boolean {
    return this.filters().includes(filter);
  }
}
