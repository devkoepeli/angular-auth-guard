import { Injectable } from '@angular/core';
import { Filter } from '../models/filter.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filtersSubject = new BehaviorSubject<Filter[]>(['all']);
  filters$ = this.filtersSubject.asObservable();

  constructor() { }

  setFilter(filter: Filter): void {
    const currentFilters = this.filtersSubject.getValue();
    const updatedFilters = currentFilters.filter(f => f !== 'all' && f !== filter);

    updatedFilters.push(filter);
    this.filtersSubject.next(updatedFilters);
  }

  removeFilter(filter: Filter): void {
    const currentFilters = this.filtersSubject.getValue();
    let updatedFilters = currentFilters.filter(f => f !== filter);

    if (updatedFilters.length === 0) {
      updatedFilters = ['all'];
    }

    this.filtersSubject.next(updatedFilters);
  }

  isFilterActive(filter: Filter): boolean {
    return this.filtersSubject.getValue().includes(filter);
  }
}
